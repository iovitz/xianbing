import { HttpStatus } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import * as statuses from 'statuses';

export abstract class BaseErrorFilter {
  constructor(private status: HttpStatus) {}

  async catch(err: Error, ctx: Context) {
    const { status } = this;

    ctx.status = status;

    const message = statuses(status);

    this.log(message, err, ctx);

    return {
      code: status * 100,
      success: false,
      message: message,
    };
  }

  protected log(message: string, err: Error, ctx: Context) {
    ctx.logger.error(message, err);
  }
}
