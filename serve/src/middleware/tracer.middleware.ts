import { Middleware, IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';
import { customAlphabet } from 'nanoid';

@Middleware()
export class TracerMiddleware implements IMiddleware<Context, NextFunction> {
  private tracerIdGenerator = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyz',
    10
  );
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const stime = process.hrtime.bigint();
      ctx.traceId = this.tracerIdGenerator();
      ctx.logger.info(
        `+++Incoming Info：${ctx.userId ?? 'UNKNOWN'} ${ctx.method} ${ctx.url}`,
        {}
      );
      try {
        const result = await next();
        return result;
      } catch (e) {
        // ...
        throw e;
      } finally {
        const cost = process.hrtime.bigint() - stime;

        ctx.logger.info(`---Request Finish, cost: ${cost}ns`);
      }
    };
  }

  static getName(): string {
    return 'tracer';
  }
}
