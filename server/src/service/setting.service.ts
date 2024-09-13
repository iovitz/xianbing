import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from '../entity/setting.mysql';

@Provide()
export class SettingService {
  @InjectEntityModel(Setting)
  settingModel: Repository<Setting>;

  // 获取所有配置
  getAllSettings() {
    return this.settingModel.find();
  }
}
