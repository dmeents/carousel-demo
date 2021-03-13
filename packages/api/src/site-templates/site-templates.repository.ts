import { SiteTemplate } from './site-templates.interface';
import { siteTemplates } from '../_database/site-templates';

interface ISiteTemplateRepository {
  getAll: () => Promise<SiteTemplate[]>;
}

/**
 * Handle retrieving and returning data from the database
 */
export class SiteTemplatesRepository implements ISiteTemplateRepository {
  // eslint-disable-next-line class-methods-use-this
  public getAll(): Promise<SiteTemplate[]> {
    return Promise.resolve(siteTemplates);
  }
}
