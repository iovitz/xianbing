import {
  WSController,
  OnWSMessage,
  Inject,
  OnWSConnection,
} from '@midwayjs/core';
import { Context } from '@midwayjs/socketio';

@WSController('/')
export class HelloSocketController {
  @Inject()
  ctx: Context;

  @OnWSConnection()
  async onConnectionMethod() {
    console.log('on client connect', this.ctx.id);
  }

  @OnWSMessage('myEvent')
  async gotMessage(data) {
    console.log('on data got', this.ctx.id, data);
  }
}
