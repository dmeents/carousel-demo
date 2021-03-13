import { Response } from 'express';
import { SiteTemplate } from './site-templates.interface';
import { SiteTemplatesRepository } from './site-templates.repository';
import { NOT_FOUND } from '../errors';

interface ISiteTemplatesService {
  getAll: () => Promise<SiteTemplate[]>;
  getById: (id: string, res: Response) => Promise<SiteTemplate>;
}

/**
 * Performs business logic on requests for site template data
 */
export class SiteTemplatesService implements ISiteTemplatesService {
  constructor(private siteTemplateRepository: SiteTemplatesRepository) {}

  public async getById(id: string, res: Response): Promise<SiteTemplate> {
    const allSites = await this.siteTemplateRepository.getAll();
    const result = allSites.filter(i => i.id === id)[0];

    if (!result) res.status(404).json({ status: 404, message: NOT_FOUND });
    return result;
  }

  public async getAll(): Promise<SiteTemplate[]> {
    return this.siteTemplateRepository.getAll();
  }
}
