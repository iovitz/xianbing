import { Catch, httpError, HttpStatus } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { BaseErrorFilter } from './base.filter';

@Catch(httpError.NotFoundError)
export class NotFoundFilter extends BaseErrorFilter {
  constructor() {
    super(HttpStatus.NOT_FOUND);
  }

  protected log(message: string, err: Error, ctx: Context) {
    ctx.logger.info('NotFound');
  }
}
