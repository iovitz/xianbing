import { Model as SequelizeModel } from 'sequelize';

export class Entity<T> extends SequelizeModel<T> {}
