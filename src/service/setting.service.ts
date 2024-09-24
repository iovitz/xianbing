import { Provide } from '@midwayjs/core';
import { InjectRepository } from '@midwayjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Setting } from '../mysql/setting';

@Provide()
export class SettingService {
  @InjectRepository(Setting)
  settingModel: Repository<Setting>;

  // 获取所有配置
  getAllSettings() {
    return this.settingModel.findAll();
  }
}
