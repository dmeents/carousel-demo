import React from 'react';
import { BounceLoader } from 'react-spinners';
import theme from '../../_styles/themes.config';
import { SGlobalLoading } from './global-loading.styles';

export const GlobalLoading: React.FC = () => {
  const { primary20 } = theme('light');

  return (
    <SGlobalLoading.Container>
      <BounceLoader color={primary20} />
      <h2>loading...</h2>
    </SGlobalLoading.Container>
  );
};
