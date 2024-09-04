import { App, ILogger, Logger, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { Sequelize } from 'sequelize';
import useUserEntity, { User } from './user.entity';
import useSessionEntity, { Session } from './session.entity';

@Provide()
export class MysqlService {
  @App()
  app: Application;

  @Logger()
  logger: ILogger;

  private sequelize: Sequelize;

  User: User;
  Session: Session;

  async connect() {
    const mysqlConfig = this.app.getConfig('db.mysql');
    const mysqlLogger = this.app.getLogger('MYSQL');
    // 配置连接参数
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
    this.User = useUserEntity(sequelize);
    this.Session = useSessionEntity(sequelize);
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
  }
}
