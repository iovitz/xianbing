import '@midwayjs/koa';

declare module '@midwayjs/koa' {
  interface Context {
    skipFormat?: boolean;
    controllerCost?: bigint;
  }
}
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
