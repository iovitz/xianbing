import { Inject, Provide } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import * as superagent from 'superagent';

@Provide()
export class WxPusherService {
  @Inject()
  ctx: Context;

  pushMessage(summary: string, content: string, url: string) {
    return superagent
      .post('https://wxpusher.zjiecode.com/api/send/message')
      .send({
        appToken: '',
        content: `<h1>${content}</h1>`,
        summary,
        contentType: 2,
        uids: ['UID_CEdSzTAEYg2KXQGfLOs6ZuMUei8U'],
        url,
      });
  }
}
