import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ApiTags } from '@midwayjs/swagger';
import { LabelService } from '../service/label.service';

@ApiTags('Tag标签')
@Controller('/api/label')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  label: LabelService;

  @Get('/all')
  async getInfo() {
    const tags = await this.label.getAllTags();
    return tags;
  }
}
