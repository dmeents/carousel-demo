import { Response } from 'express';
import { SiteTemplate, SiteTemplateBrief } from './site-templates.interface';
import { SiteTemplatesRepository } from './site-templates.repository';
import { NOT_FOUND } from '../errors';

interface ISiteTemplatesService {
  getAll: () => Promise<SiteTemplateBrief[]>;
  getById: (id: string, res: Response) => Promise<SiteTemplate>;
}

/**
 * Performs business logic on requests for site template data
 */
export class SiteTemplatesService implements ISiteTemplatesService {
  constructor(private siteTemplateRepository: SiteTemplatesRepository) {}

  public async getById(id: string, res: Response): Promise<SiteTemplate> {
    const result = await this.siteTemplateRepository.getById(id);
    if (!result) res.status(404).json({ status: 404, message: NOT_FOUND });
    return result;
  }

  public async getAll(): Promise<SiteTemplateBrief[]> {
    const results = await this.siteTemplateRepository.getAll();

    return results.map(i => ({
      id: i.id,
      thumbnail: i.thumbnail,
      title: i.title,
    }));
  }
}
