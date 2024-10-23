import { Middleware, IMiddleware, httpError, App } from '@midwayjs/core';
import { NextFunction, Context, Application } from '@midwayjs/koa';

@Middleware()
export class TimeoutMiddleware implements IMiddleware<Context, NextFunction> {
  @App()
  app!: Application;

  resolve() {
    return (ctx: Context, next: NextFunction) => {
      const timeout = this.app.getConfig('gateway.timeout');
      let isTimeout = false;

      ctx.isTimeout = () => isTimeout;

      const timeoutPromise = new Promise((_, rej) =>
        setTimeout(() => {
          isTimeout = true;
          rej(new httpError.GatewayTimeoutError(`Timeout of ${timeout}`));
        }, timeout)
      );

      return Promise.race([next(), timeoutPromise]);
    };
  }

  static getName(): string {
    return 'tags';
  }
}
