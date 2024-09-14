import { Middleware, IMiddleware, App } from '@midwayjs/core';
import { NextFunction, Context, Application } from '@midwayjs/koa';
import stringify = require('fast-json-stable-stringify');
import { customAlphabet } from 'nanoid';

@Middleware()
export class TracerMiddleware implements IMiddleware<Context, NextFunction> {
  @App()
  app: Application;

  private tracerIdGenerator = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyz',
    10
  );
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const stime = process.hrtime.bigint();
      ctx.traceId = this.tracerIdGenerator();
      ctx.logger.info(
        `+++Incoming Info：${ctx.userId ?? '??'} ${ctx.method} ${ctx.url}`,
        this.app.getEnv() === 'local'
          ? stringify({
              body: ctx.request.body,
              query: ctx.request.query,
              params: ctx.params,
            })
          : {}
      );
      try {
        const result = await next();
        return result;
      } catch (e) {
        // ...
        throw e;
      } finally {
        const cost = process.hrtime.bigint() - stime;

        ctx.logger.info(`---Request Finish, cost: ${cost}us`);
      }
    };
  }

  static getName(): string {
    return 'tracer';
  }
}
