import { HttpStatus } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import * as statuses from 'statuses';

export abstract class BaseErrorFilter {
  constructor(private status: HttpStatus) {}

  async catch(err: Error, ctx: Context) {
    const { status } = this;
    console.log(status);
    console.log(this);

    ctx.status = status;

    const message = statuses(status);

    ctx.logger.error(message, err);

    return {
      code: status * 100,
      success: false,
      message: message,
    };
  }
}
