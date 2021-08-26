import React, { FC, useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';

import { Photo } from 'types';
import { Loading } from 'components';

import { GalleryContainer, GalleryWrapper } from './Gallery.styles';
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

const START_IMAGES_COUNT = 150;
const ADDING_IMAGES_COUNT = 50;
const LOADING_BOTTOM_SPACE = 250;
const IMAGES_LIMIT = 5000;

const Gallery: FC = () => {
  const galleryWrapper = useRef<HTMLDivElement>(null);
  const [pageData, setPageData] = useState({
    start: 0,
    end: START_IMAGES_COUNT,
    limit: IMAGES_LIMIT,
  });
  const [images, setImages] = useState<Array<Photo>>([]);
  const { loading, data, fetchMore } = useQuery<{ photos: { data: Array<Photo> } }>(GET_PHOTOS_PAGE, {
    variables: {
      options: {
        slice: pageData,
      },
    },
  });

  useEffect(() => {
    if (pageData.start === 0) {
      setImages(data?.photos.data ?? []);
    }
  }, [data?.photos.data]);

  const handleMoreImages = () => {
    try {
      const newPagination = { ...pageData, start: pageData.end, end: pageData.end + ADDING_IMAGES_COUNT };

      fetchMore({
        variables: {
          options: {
            slice: newPagination,
          },
        },
      }).then(({ data }) => {
        setImages(images.concat(data.photos.data));
        setPageData(newPagination);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const imagesList = useMemo(
    () => (
      <GalleryContainer>
        {images.map((photo) => (
          <GalleryImage key={photo.id} photo={photo} />
        ))}
      </GalleryContainer>
    ),
    [images],
  );

  const handleScroll = useCallback(() => {
    if (galleryWrapper.current) {
      if (
        galleryWrapper.current.scrollTop + galleryWrapper.current.clientHeight >=
        galleryWrapper.current.scrollHeight - LOADING_BOTTOM_SPACE
      ) {
        handleMoreImages();
      }
    }
  }, [galleryWrapper.current?.scrollTop, galleryWrapper.current?.clientHeight, galleryWrapper.current?.scrollHeight]);

  return (
    <GalleryWrapper ref={galleryWrapper} onScroll={handleScroll}>
      {imagesList}
      {loading && <Loading />}
    </GalleryWrapper>
  );
};

export default Gallery;
