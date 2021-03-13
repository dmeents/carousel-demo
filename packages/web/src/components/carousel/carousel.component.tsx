import React, { useEffect, useState } from 'react';
import {
  useSiteTemplate,
  useSiteTemplates,
} from '../../_hooks/site-templates.hook';
import { SCarousel } from './carousel.styles';
import { Thumbnail } from './components/thumbnail.component';
import { SiteTemplateBrief } from '../../_interfaces/site-templates.interface';
import { Image } from './components/image.component';
import { Details } from './components/details.component';

/**
 * Renders the carousel component
 * @constructor
 */
export const Carousel: React.FC = () => {
  const { templates, pages, pageLength, isLoading } = useSiteTemplates();
  const [selected, select] = useState<SiteTemplateBrief>(templates?.[0]);
  const [page, setPage] = useState(0);
  const { template } = useSiteTemplate(selected?.id);
  const index = pageLength * page;
  const templatesToShow = templates?.slice(index, index + 4);

  useEffect(() => {
    if (!isLoading && !selected) select(templates?.[0]);
  }, [templates]);

  const handlePageChange = (v: number) => {
    const newPage = page + v;
    if (newPage > pages - 1 || newPage < 0) return;
    setPage(newPage);
  };

  return (
    <SCarousel.Container>
      <SCarousel.SelectionWrapper>
        <Image image={template?.image} />
        <Details template={template} />
      </SCarousel.SelectionWrapper>
      <SCarousel.ThumbnailContainer>
        <SCarousel.Thumbnails>
          {templatesToShow?.map(i => (
            <Thumbnail
              key={i.id}
              template={i}
              selected={i.id === selected?.id}
              select={(v: SiteTemplateBrief) => select(v)}
            />
          ))}
        </SCarousel.Thumbnails>
        <SCarousel.ThumbnailNavigation>
          <SCarousel.LeftArrow
            title="previous page"
            onClick={() => handlePageChange(-1)}
          />
          <h3>
            Page {page + 1} of {pages}
          </h3>
          <SCarousel.RightArrow
            title="next page"
            onClick={() => handlePageChange(1)}
          />
        </SCarousel.ThumbnailNavigation>
      </SCarousel.ThumbnailContainer>
    </SCarousel.Container>
  );
};
