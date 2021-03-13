import { RouteDefinition } from '../interface';
import { SiteTemplateController } from './site-templates.controller';
import { SiteTemplatesRepository } from './site-templates.repository';
import { SiteTemplatesService } from './site-templates.service';

/**
 * Creates the site template routes and injects the required dependencies
 * for the service and controller
 * @param app
 * @constructor
 */
export const SiteTemplateModule = app => {
  const repository = new SiteTemplatesRepository();
  const service = new SiteTemplatesService(repository);
  const controller = new SiteTemplateController(service);
  const prefix = Reflect.getMetadata('prefix', SiteTemplateController);

  const routes: Array<RouteDefinition> = Reflect.getMetadata(
    'routes',
    SiteTemplateController,
  );

  routes.forEach(route => {
    app[route.requestMethod](prefix + route.path, (req, res) =>
      controller[route.methodName](req, res),
    );
  });
};
