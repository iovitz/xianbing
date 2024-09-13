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
import * as orm from '@midwayjs/typeorm';
import * as swagger from '@midwayjs/swagger';
import { FormatMiddleware } from './middleware/format.middleware';
import { TypeORMDataSourceManager } from '@midwayjs/typeorm';
import { BadRequestFilter } from './filter/badrequest.filter';
import { Logger as TypeOrmLogger } from 'typeorm';

dotenv.config();

@Configuration({
  imports: [
    koa,
    orm,
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
    const typeormDataSourceManager = await container.getAsync(
      TypeORMDataSourceManager
    );

    const mysqlConnection = typeormDataSourceManager.getDataSource('mysql');
    mysqlConnection.logger = this.getTypeormLogger('MYSQL');

    if (mysqlConnection.isConnected) {
      this.logger.info('Data Source has been initialized!');
    }

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

  getTypeormLogger(name: string) {
    console.log(name);
    const logger = this.app.getLogger(name);
    const typeormLogger: TypeOrmLogger = {
      logQuery: function (query: string, parameters?: any[]) {
        logger.debug(`[${name}]: ${query}`, parameters);
      },
      logQueryError: function (
        error: string | Error,
        query: string,
        parameters?: any[]
      ) {
        logger.error(`[${name}]: ${query}`, parameters, error);
      },
      logQuerySlow: function (time: number, query: string, parameters?: any[]) {
        logger.warn(`[${name}]Slow Query(${time}): ${query}`, parameters);
      },
      logSchemaBuild: function (message: string) {
        logger.debug(`[${name}]Schema Build: ${message}`);
      },
      logMigration: function (message: string) {
        logger.debug(`[${name}]Migration: ${message}`);
      },
      log: function (level: 'warn' | 'info' | 'log', message: any) {
        this.log[level](`[${name}]: message`);
      },
    };
    return typeormLogger;
  }
}
