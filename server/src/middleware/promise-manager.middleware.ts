import { Middleware, IMiddleware, App, ILogger } from '@midwayjs/core';
import { NextFunction, Context, Application } from '@midwayjs/koa';
import { Session } from '../mysql/session';
import { Repository } from 'sequelize-typescript';
import { InjectRepository } from '@midwayjs/sequelize';

type PromiseKey = 'get-user-info-by-session-id';

export class PromiseManager {
  private promises = new Map<string, Promise<any>>();

  constructor(private logger: ILogger) {}

  set(key: PromiseKey, promise: Promise<unknown>) {
    if (this.promises.has(key)) {
      this.logger.error('multy promise key', { key });
    }
    this.promises.set(
      key,
      promise.catch(e => {
        this.logger.error('promise error', { key });
        throw e;
      })
    );
  }

  get<T = any>(key: PromiseKey) {
    return this.promises.get(key) as Promise<T>;
  }
}

@Middleware()
export class PromiseManagerMiddleware
  implements IMiddleware<Context, NextFunction>
{
  @App()
  app: Application;

  @InjectRepository(Session)
  private sessionModel: Repository<Session>;

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // 预热一些Promise
      const promiseManager = new PromiseManager(ctx.logger);
      ctx.promiseManager = promiseManager;

      // 有登录态，拉取session对应的信息
      const sessionId = ctx.cookies.get('session-id');
      if (sessionId) {
        promiseManager.set(
          'get-user-info-by-session-id',
          this.sessionModel
            .findOne({
              where: {
                sessionId,
              },
            })
            .then(v => {
              ctx.userId = v.userId;
            })
        );
      }

      // ...

      return next();
    };
  }

  static getName(): string {
    return 'prepare-promise';
  }
}
