import React, { FC, memo, useState } from 'react';

import { Photo } from 'types';
import { Loading } from 'components';

import { ImageWrapper } from './GalleryImage.styles';

type Props = {
  photo: Photo;
  style: { [key: string]: any };
};

const GalleryImage: FC<Props> = memo(
  ({ photo, style }) => {
    const [loading, setLoading] = useState(true);

    return (
      <ImageWrapper style={style}>
        {loading && <Loading />}
        <img
          src={photo.url}
          alt={photo.title}
          onLoad={() => {
            setLoading(false);
          }}
        />
      </ImageWrapper>
    );
  },
  (prevProps, nextProps) => nextProps.photo.id !== prevProps.photo.id,
);

export default GalleryImage;
