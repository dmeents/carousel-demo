import { SiteTemplate, SiteTemplateBrief } from './site-templates.interface';
import { siteTemplates } from '../_database/site-templates';

interface ISiteTemplateRepository {
  getAll: () => Promise<SiteTemplateBrief[]>;
  getById: (id: string) => Promise<SiteTemplate>;
}

/**
 * Handle retrieving and returning data from the database
 */
export class SiteTemplatesRepository implements ISiteTemplateRepository {
  // eslint-disable-next-line class-methods-use-this
  public getAll(): Promise<SiteTemplateBrief[]> {
    return Promise.resolve(siteTemplates);
  }

  // eslint-disable-next-line class-methods-use-this
  public getById(id: string): Promise<SiteTemplate> {
    return Promise.resolve(siteTemplates.filter(i => i.id === id)[0]);
  }
}
