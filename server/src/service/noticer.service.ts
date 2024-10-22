import { Inject, Provide } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Provide()
export class NoticerService {
  @Inject()
  ctx: Context;

  pushMessage(msg: string) {
    console.log(msg);
  }
}
