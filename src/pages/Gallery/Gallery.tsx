import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { AutoSizer, Grid } from 'react-virtualized';
import { Size } from 'react-virtualized/dist/es/AutoSizer';
import { GridCellProps } from 'react-virtualized/dist/es/Grid';

import { Photo } from 'types';
import { Loading } from 'components';

import { GalleryWrapper } from './Gallery.styles';
import GalleryImage from './GalleryImage/GalleryImage';

const GET_PHOTOS_PAGE = gql`
  query ($options: PageQueryOptions) {
    photos(options: $options) {
      data {
        id
        title
        url
        thumbnailUrl
      }
    }
  }
`;

const START_IMAGES_COUNT = 5000;
const SIDEBAR_WIDTH = 200;

const Gallery: FC = () => {
  const galleryWrapper = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: 1920,
    height: 900,
  });
  const [imageSize, setImageSize] = useState({
    width: 200,
    height: 200,
  });

  const { loading, data } = useQuery<{ photos: { data: Array<Photo> } }>(GET_PHOTOS_PAGE, {
    variables: {
      options: {
        slice: {
          start: 0,
          end: START_IMAGES_COUNT,
        },
      },
    },
  });

  const changeImagesSize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth - SIDEBAR_WIDTH,
      height: window.innerHeight,
    });
  }, [window.innerWidth, window.innerHeight]);

  useEffect(() => {
    changeImagesSize();
  }, [changeImagesSize]);

  const columnCount = useMemo(() => Math.floor(windowSize.width / 200), [windowSize.width]);
  const rowsCount = useMemo(
    () => Math.floor(data?.photos.data.length ?? 0 / columnCount),
    [data?.photos.data.length, columnCount],
  );

  useEffect(() => {
    setImageSize({
      width: windowSize.width / columnCount,
      height: windowSize.width / columnCount,
    });
  }, [windowSize.width, columnCount, changeImagesSize]);

  useEffect(() => {
    window.addEventListener('resize', changeImagesSize);
  });

  const cellRenderer = ({ columnIndex, rowIndex, style }: GridCellProps) => {
    const inx = rowIndex * columnCount + columnIndex;
    const photo: Photo | undefined = data?.photos.data[inx];

    if (!photo) {
      return null;
    }

    return <GalleryImage key={photo.id} style={style} photo={photo} />;
  };

  const GridWrapper = useMemo(
    () => (
      <AutoSizer>
        {({ height, width }: Size) => (
          <Grid
            height={height}
            autoContainerWidth
            columnCount={columnCount}
            rowCount={rowsCount}
            rowHeight={imageSize.height}
            cellRenderer={cellRenderer}
            columnWidth={imageSize.width}
            width={width}
          />
        )}
      </AutoSizer>
    ),
    [data?.photos.data, columnCount, rowsCount, imageSize],
  );

  return (
    <GalleryWrapper ref={galleryWrapper}>
      {GridWrapper}
      {loading && <Loading />}
    </GalleryWrapper>
  );
};

export default Gallery;
