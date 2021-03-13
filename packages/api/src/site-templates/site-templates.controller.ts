import { Controller } from '../_decorators/controller';
import { Get } from '../_decorators/get';
import { SiteTemplate, SiteTemplateBrief } from './site-templates.interface';
import { SiteTemplatesService } from './site-templates.service';

/**
 * Define the routes for the site-template endpoints
 */
@Controller('/site-templates')
export class SiteTemplateController {
  constructor(private siteTemplatesService: SiteTemplatesService) {}

  @Get('/')
  async getAll(req, res): Promise<SiteTemplateBrief[]> {
    const response = await this.siteTemplatesService.getAll();
    return res.send(response);
  }

  @Get('/:id')
  async getById(req, res): Promise<SiteTemplate> {
    const { id } = req.params;
    const response = await this.siteTemplatesService.getById(id, res);
    return res.send(response);
  }
}
