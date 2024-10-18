import '@midwayjs/koa';
import { PromiseManager } from './middleware/promise-manager.middleware';

declare module '@midwayjs/koa' {
  interface Context {
    skipFormat: boolean;
    userId: string;
    promiseManager: PromiseManager;
  }
}
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
