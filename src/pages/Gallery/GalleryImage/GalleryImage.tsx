import React from 'react';
import faker from 'faker';

import { ImageWrapper } from './GalleryImage.styles';

const GalleryImage = () => {
  return (
    <ImageWrapper>
      <img src={faker.image.avatar()} alt={faker.image.avatar()} />
    </ImageWrapper>
  );
};

export default GalleryImage;
