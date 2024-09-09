import '@midwayjs/koa';

declare module '@midwayjs/koa' {
  interface Context {
    skipFormat?: boolean;
  }
}
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}
