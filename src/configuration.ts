import {
  Configuration,
  App,
  IMidwayContainer,
  Logger,
  ILogger,
} from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as view from '@midwayjs/view-ejs';
import * as info from '@midwayjs/info';
import * as socketio from '@midwayjs/socketio';
import * as staticFile from '@midwayjs/static-file';
import { join } from 'path';
import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';
import { TracerMiddleware } from './middleware/tracer.middleware';
import * as dotenv from 'dotenv';
import * as sequelize from '@midwayjs/sequelize';
import * as swagger from '@midwayjs/swagger';
import { FormatMiddleware } from './middleware/format.middleware';
import { BadRequestFilter } from './filter/badrequest.filter';
import { SequelizeDataSourceManager } from '@midwayjs/sequelize';

dotenv.config();

@Configuration({
  imports: [
    koa,
    sequelize,
    staticFile,
    validate,
    view,
    socketio,
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

    // 链接数据库
    const dataSourceManager = await container.getAsync(
      SequelizeDataSourceManager
    );
    const conn = dataSourceManager.getDataSource('default');
    await conn.authenticate();

    this.logger.info(`Server Running Success: http://localhost:${port}`);

    if (this.app.getEnv() === 'local') {
      // 本地开发时，打印Swagger地址
      this.logger.info(
        `Swagger Running In: http://localhost:${port}/swagger-ui/index.html`
      );
    }
  }

  async onStop(): Promise<void> {
    this.logger.info('Server exit!!!');
  }
}