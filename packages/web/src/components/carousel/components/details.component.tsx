import React from 'react';
import {
  defaultTemplate,
  SiteTemplate,
} from '../../../_interfaces/site-templates.interface';
import { SDetails } from '../carousel.styles';

interface IDetails {
  template: SiteTemplate;
}

export const Details: React.FC<IDetails> = props => {
  const { template = defaultTemplate } = props;

  return (
    <SDetails.Container>
      {Object.keys(template).map(i => (
        <SDetails.LineItem>
          <h4>{i}</h4>
          <div>
            {i === 'cost' && '$'}
            {template?.[i]}
          </div>
        </SDetails.LineItem>
      ))}
    </SDetails.Container>
  );
};
