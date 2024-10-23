import { Catch, httpError, HttpStatus } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { BaseErrorFilter } from './base.filter';

@Catch(httpError.GatewayTimeoutError)
export class GatewayTimeoutFilter extends BaseErrorFilter {
  constructor() {
    super(HttpStatus.GATEWAY_TIMEOUT);
  }

  override log(message: string, err: Error, ctx: Context) {
    ctx.logger.error(`Gateway Timeout: ${message}`, err);
  }
}
