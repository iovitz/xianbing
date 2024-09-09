import {
  Configuration,
  App,
  IMidwayContainer,
  Logger,
  ILogger,
} from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';
import { TracerMiddleware } from './middleware/tracer.middleware';
import * as dotenv from 'dotenv';
import * as orm from '@midwayjs/typeorm';
import * as swagger from '@midwayjs/swagger';
import { FormatMiddleware } from './middleware/format.middleware';
import { TypeORMDataSourceManager } from '@midwayjs/typeorm';
import { BadRequestFilter } from './filter/badrequest.filter';

dotenv.config();

@Configuration({
  imports: [
    koa,
    orm,
    validate,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  @Logger()
  logger: ILogger;

  async onReady() {
    // add middleware
    this.app.useMiddleware([TracerMiddleware, FormatMiddleware]);
    // add filter
    this.app.useFilter([NotFoundFilter, DefaultErrorFilter, BadRequestFilter]);
  }

  async onServerReady(container: IMidwayContainer): Promise<void> {
    const port = this.app.getConfig('koa.port');
    const typeormDataSourceManager = await container.getAsync(
      TypeORMDataSourceManager
    );

    const mysqlConnection = typeormDataSourceManager.getDataSource('mysql');
    if (mysqlConnection.isConnected) {
      this.logger.info('Data Source has been initialized!');
    }

    this.logger.info(`Server Running Success: http://localhost:${port}`);

    if (this.app.getEnv() === 'local') {
      this.logger.info(
        `Swagger Running In: http://localhost:${port}/swagger-ui/index.html`
      );
    }
  }

  async onStop(): Promise<void> {
    this.logger.info('Server exit!!!');
  }
}
