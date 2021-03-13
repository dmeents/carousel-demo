import React from 'react';
import { GlobalHead } from '../../components/global-head/global-head.component';
import { SHomePage } from './home.styles';
import { Carousel } from '../../components/carousel/carousel.component';

export const HomePage: React.FC = () => {
  return (
    <SHomePage.Container>
      <GlobalHead title="hello world" />
      <Carousel />
    </SHomePage.Container>
  );
};
