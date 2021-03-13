import React from 'react';
import { Helmet } from 'react-helmet';
import { IGlobalHead } from './global-head.interface';

export const GlobalHead: React.FC<IGlobalHead> = props => {
  const { title } = props;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </div>
  );
};
