import React from 'react';
import { SThumbnail } from '../carousel.styles';
import {
  SiteTemplate,
  SiteTemplateBrief,
} from '../../../_interfaces/site-templates.interface';
import { config } from '../../../_config';

const { thumbnailImages } = config.routes;

interface IThumbnail {
  template: SiteTemplate;
  selected: boolean;
  select: (v: SiteTemplateBrief) => void;
}

export const Thumbnail: React.FC<IThumbnail> = props => {
  const { template, selected, select } = props;
  const image = `${thumbnailImages}/${template?.thumbnail}`;

  return (
    <SThumbnail.Container selected={selected} onClick={() => select(template)}>
      <SThumbnail.Image image={image} />
    </SThumbnail.Container>
  );
};
