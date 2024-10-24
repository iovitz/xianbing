import { App, ILogger, Logger, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import * as superagent from 'superagent';

@Provide()
export class NoticeService {
  @App()
  app: Application;

  @Logger()
  logger: ILogger;

  error(message: string) {
    return this.notice(`🔴 ${message}`);
  }

  warn(message: string) {
    return this.notice(`🟠 ${message}`);
  }

  success(message: string) {
    return this.notice(`🟢 ${message}`);
  }

  info(message: string) {
    return this.notice(`🔵 ${message}`);
  }

  private async notice(message: string) {
    this.logger.info(message);
    if (this.app.getEnv() !== 'production') {
      return true;
    }

    const data = await superagent
      .post(`https://fwalert.com/${this.app.getConfig('secrets.fwalert')}`)
      .send({
        message: `${new Date().toLocaleTimeString()} - ${
          process.pid
        } : ${message}`,
      });
    if (data.statusCode === 200) {
      return true;
    }
    return false;
  }
}
