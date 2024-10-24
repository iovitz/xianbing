import {
  Configuration,
  App,
  IMidwayContainer,
  Logger,
  ILogger,
  ILifeCycle,
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
import { NoticeService } from './service/noticer.service';
import { PromiseManagerMiddleware } from './middleware/promise-manager.middleware';
import { TagsMiddleware } from './middleware/tags.middleware';
import { GatewayTimeoutFilter } from './filter/timeout.filter';
import { stringify } from 'querystring';

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
export class MainConfiguration implements ILifeCycle {
  @App('koa')
  app: koa.Application;

  @Logger()
  logger: ILogger;

  private noticer: NoticeService;

  async onReady() {
    // add middleware
    this.app.useMiddleware([
      TracerMiddleware,
      TagsMiddleware,
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
    const env = this.app.getEnv();
    const port = this.app.getConfig('koa.port');

    const noticer = await app.getApplicationContext().getAsync(NoticeService);
    this.noticer = noticer;

    // 线上环境打印环境变量

    if (this.app.getEnv() === 'production') {
      this.logger.info(
        '[bootstrap]: App Running Environment',
        stringify(process.env)
      );
      this.logger.info(
        `[bootstrap]Server Running Success[${env}]: http://localhost:${port}`
      );
    } else {
      // 本地开发时，打印Swagger地址
      this.logger.info(
        `[bootstrap]Swagger Running In: http://localhost:${port}/swagger-ui/index.html`
      );
    }

    // 通知PM2开始营业
    process.send('ready');
  }

  async onStop(): Promise<void> {
    this.noticer.warn('Server Exits');
  }
}
