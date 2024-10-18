import { Middleware, IMiddleware, App } from '@midwayjs/core';
import { NextFunction, Context, Application } from '@midwayjs/koa';
import { stringify } from 'safe-stable-stringify';
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
        `+++${ctx.userId ?? '??'} ${ctx.method} ${ctx.url}`,
        //开发环境打印请求参数
        this.app.getEnv() === 'local'
          ? stringify({
              body: ctx.request.body,
              query: ctx.request.query,
              params: ctx.params,
            })
          : void 0
      );
      const result = await next();
      const cost = process.hrtime.bigint() - stime;
      ctx.logger.info(
        '---',
        stringify({
          cost: `cost:${cost}us`,
        })
      );
      return result;
    };
  }

  static getName(): string {
    return 'tracer';
  }
}
