import {
  WSController,
  OnWSMessage,
  Inject,
  OnWSConnection,
  OnWSDisConnection,
} from '@midwayjs/core';
import { Context } from '@midwayjs/socketio';

@WSController('ws/socket.io')
export class HelloSocketController {
  @Inject()
  ctx: Context;

  @OnWSConnection()
  async onConnection() {
    this.ctx.logger.info(`>>>Socket In: ${this.ctx.id}`);
  }

  @OnWSDisConnection()
  async onDisconnection() {
    this.ctx.logger.info(`<<<Socket Out: ${this.ctx.id}`);
  }

  @OnWSMessage('niubi')
  async gotMessage(data: unknown) {
    this.ctx.logger.info(`!!!Socket Message: (${this.ctx.id})`, data);
  }
}
