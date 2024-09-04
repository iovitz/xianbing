import { Catch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Catch()
export class DefaultErrorFilter {
  async catch(err: Error, ctx: Context) {
    ctx.logger.error('请求失败', err);
    // 所有的未分类错误会到这里
    ctx.status = 500;
    return {
      code: 50000,
      success: false,
      message: err.message,
    };
  }
}
