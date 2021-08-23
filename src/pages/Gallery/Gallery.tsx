import React, { FC } from 'react';

import { GalleryContainer } from './Gallery.styles';
import GalleryImage from './GalleryImage/GalleryImage';

const Gallery: FC = () => {
  const imagesList = new Array(1000).fill(0);

  return (
    <GalleryContainer>
      {imagesList.map((i) => {
        return <GalleryImage key={`${i}__${Math.random()}`} />;
      })}
    </GalleryContainer>
  );
};

export default Gallery;
