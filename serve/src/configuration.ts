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
import { MysqlService } from './db/mysql/mysql.service';
import * as dotenv from 'dotenv';
import { FormatMiddleware } from './middleware/format.middleware';

dotenv.config();

@Configuration({
  imports: [
    koa,
    validate,
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
    this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }

  async onServerReady(container: IMidwayContainer): Promise<void> {
    const port = this.app.getConfig('koa.port');

    await (await container.getAsync(MysqlService)).connect();
    this.logger.info(`Server Running Success: http://localhost:${port}`);
  }

  async onStop(): Promise<void> {
    this.logger.info('Server exit!!!');
  }
}
