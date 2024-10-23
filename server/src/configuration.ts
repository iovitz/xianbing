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
import * as typeorm from '@midwayjs/typeorm';
import * as swagger from '@midwayjs/swagger';
import { FormatMiddleware } from './middleware/format.middleware';
import { BadRequestFilter } from './filter/badrequest.filter';
import { NoticerService } from './service/noticer.service';
import { PromiseManagerMiddleware } from './middleware/promise-manager.middleware';
import { TagsMiddleware } from './middleware/tags.middleware';
import { TimeoutMiddleware } from './middleware/timeout.middleware';
import { GatewayTimeoutFilter } from './filter/timeout.filter';

dotenv.config();

@Configuration({
  imports: [
    koa,
    typeorm,
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
    this.app.useMiddleware([
      TracerMiddleware,
      TagsMiddleware,
      TimeoutMiddleware,
      PromiseManagerMiddleware,
      FormatMiddleware,
      // 统计Controller的耗时的，需要放在最后
    ]);
    // add filter
    this.app.useFilter([
      NotFoundFilter,
      DefaultErrorFilter,
      BadRequestFilter,
      GatewayTimeoutFilter,
    ]);
  }

  async onServerReady(
    container: IMidwayContainer,
    app: koa.Application
  ): Promise<void> {
    const port = this.app.getConfig('koa.port');
    const noticer = await app.getApplicationContext().getAsync(NoticerService);
    noticer.pushMessage('Hello');

    this.logger.info(
      `[bootstrap]Server Running Success[${this.app.getEnv()}]: http://localhost:${port}`
    );
    this.logger.info('[bootstrap]: App Environment');

    if (this.app.getEnv() === 'local') {
      // 本地开发时，打印Swagger地址
      this.logger.info(
        `[bootstrap]Swagger Running In: http://localhost:${port}/swagger-ui/index.html`
      );
    }
  }

  async onStop(): Promise<void> {
    this.logger.info('Server exit!!!');
  }
}
