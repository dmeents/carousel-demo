import React from 'react';
import { SImage } from '../carousel.styles';
import { config } from '../../../_config';

const { largeImages } = config.routes;

interface IImage {
  image: string;
}

export const Image: React.FC<IImage> = props => {
  const { image } = props;

  return (
    <SImage.Container>
      <SImage.Image image={`${largeImages}/${image}`} />
    </SImage.Container>
  );
};
