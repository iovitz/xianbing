import {
  WSController,
  OnWSMessage,
  Inject,
  OnWSConnection,
} from '@midwayjs/core';
import { Context } from '@midwayjs/socketio';

@WSController('socket.io')
export class HelloSocketController {
  @Inject()
  ctx: Context;

  @OnWSConnection()
  async onConnectionMethod() {
    this.ctx.logger.info(`Socket connect: ${this.ctx.id}`);
  }

  @OnWSMessage('niubi')
  async gotMessage(data: unknown) {
    console.log('on data got', this.ctx.id, data);
  }
}
