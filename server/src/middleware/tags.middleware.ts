import { Middleware, IMiddleware } from '@midwayjs/core';
import { NextFunction, Context } from '@midwayjs/koa';

@Middleware()
export class TagsMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return (ctx: Context, next: NextFunction) => {
      // 识别 x-xb 开头的请求头
      const xbTags = Object.keys(ctx.header)
        .filter(k => k.startsWith('x-xb'))
        .reduce((prev, curr) => {
          prev[curr] = ctx.header[curr];
          return prev;
        }, {});
      ctx.logger.info('header tags', xbTags);

      return next();
    };
  }

  static getName(): string {
    return 'tags';
  }
}
