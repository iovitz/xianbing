import { App, ILogger, Logger, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { Sequelize, TransactionOptions } from 'sequelize';
import { User, useUserEntity } from './user.entity';
import { Session, useSessionEntity } from './session.entity';
import { MoneySummary, useMoneySummaryEntity } from './money-summary.entity';
import { MoneyTag, useMoneyTagEntity } from './money-tag.entity';
import { UserProfile, useUserProfileEntity } from './user-profile.entity';

@Provide()
export class MysqlService {
  @App()
  app: Application;

  @Logger()
  logger: ILogger;

  public sequelize: Sequelize;

  User: User;
  Session: Session;
  MoneySummary: MoneySummary;
  MoneyTag: MoneyTag;
  UserProfile: UserProfile;

  async connect() {
    const mysqlConfig = this.app.getConfig('db.mysql');
    const mysqlLogger = this.app.getLogger('MYSQL');
    // 配置连接参数
    // 不使用sequelize-typescript的原因是ts和js无法同构
    const sequelize = new Sequelize(
      mysqlConfig.dbName,
      mysqlConfig.user,
      mysqlConfig.password,
      {
        host: mysqlConfig.host,
        dialect: 'mysql',
        logging(sql) {
          mysqlLogger.info(sql);
        },
        dialectOptions: {
          timezone: '+08:00',
        },
      }
    );

    this.sequelize = sequelize;

    // 注册模型
    this.User = useUserEntity(sequelize);
    this.Session = useSessionEntity(sequelize);
    this.MoneySummary = useMoneySummaryEntity(sequelize);
    this.MoneyTag = useMoneyTagEntity(sequelize);
    this.UserProfile = useUserProfileEntity(sequelize);

    // 定义模型关系
    this.initialRelation();

    if (this.app.getEnv() === 'local') {
      await sequelize.sync();
    }

    await this.sequelize.authenticate();
    this.logger.info('数据库连接成功');
    this.sequelize.models;
  }

  initialRelation() {
    this.User.hasMany(this.Session, { foreignKey: 'id' });
    this.Session.belongsTo(this.User, {
      foreignKey: 'userId',
      targetKey: 'id',
    });

    this.User.hasMany(this.UserProfile, { foreignKey: 'id' });
    this.UserProfile.belongsTo(this.User, {
      foreignKey: 'id',
      targetKey: 'id',
    });

    this.User.hasMany(this.MoneyTag, {
      foreignKey: 'id',
    });
    this.MoneyTag.belongsTo(this.User, {
      foreignKey: 'userId',
      targetKey: 'id',
    });

    this.MoneyTag.belongsTo(this.MoneyTag, {
      foreignKey: 'parentId',
      targetKey: 'id',
    });
  }

  transaction(options: TransactionOptions) {
    return this.sequelize.transaction(options);
  }
}
