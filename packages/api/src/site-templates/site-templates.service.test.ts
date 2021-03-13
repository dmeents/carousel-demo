import { SiteTemplatesService } from './site-templates.service';
import { siteTemplates } from '../_database/site-templates';
import { NOT_FOUND } from '../errors';

const mockResponse: any = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockGetAllData = siteTemplates.map(i => ({
  id: i.id,
  title: i.title,
  thumbnail: i.thumbnail,
}));

const mockSiteTemplatesRepository = {
  getById: async (id: string): Promise<any> =>
    Promise.resolve(siteTemplates.filter(i => i.id === id)[0]),
  getAll: async (): Promise<any> => Promise.resolve(mockGetAllData),
};

describe('Site Templates Service', () => {
  let siteTemplateService: SiteTemplatesService;

  beforeEach(() => {
    siteTemplateService = new SiteTemplatesService(mockSiteTemplatesRepository);
  });

  it('should return all template data', async () => {
    const response = await siteTemplateService.getAll();
    expect(response).toEqual(mockGetAllData);
  });

  it('should return a single template if requested', async () => {
    const id = '7111';
    const res = mockResponse();
    const response = await siteTemplateService.getById(id, res);
    expect(response).toEqual(siteTemplates.filter(i => i.id === id)[0]);
  });

  it('should respond with a 404 if the requested template does not exist', async () => {
    const id = '0000';
    const res = mockResponse();
    await siteTemplateService.getById(id, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ status: 404, message: NOT_FOUND });
  });
});
