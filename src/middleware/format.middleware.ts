import { Middleware, IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const data = await next();
      if (ctx.skipFormat) {
        return data;
      }
      return {
        code: 0,
        data,
        message: 'success',
      };
    };
  }

  static getName(): string {
    return 'format';
  }
}
