import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ApiTags } from '@midwayjs/swagger';
import { SettingService } from '../service/setting.service';
import { reduce } from 'lodash';

@ApiTags('Setting客户端配置')
@Controller('/api/setting')
export class SettingController {
  @Inject()
  ctx: Context;

  @Inject()
  setting: SettingService;

  @Get()
  async getInfo() {
    const settings = await this.setting.getAllSettings();
    return reduce(
      settings,
      (prev, { key, value }) => {
        prev[key] = value;
        return prev;
      },
      {}
    );
  }
}
