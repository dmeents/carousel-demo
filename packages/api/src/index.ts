import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import { SiteTemplateModule } from './site-templates/site-templates.module';
import { handleErrors } from './_middleware/handleErrors';

const port = 8000;
const app = express();

// utilities
app.use(morgan('dev'));
app.use(handleErrors);

// health check
app.use('/health', (req, res) => res.send({ status: 'ok' }));

// register routes
SiteTemplateModule(app);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`listening on port ${port}`));
