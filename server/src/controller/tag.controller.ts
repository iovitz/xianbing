import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ApiTags } from '@midwayjs/swagger';
import { TagService } from '../service/tag.service';

@ApiTags('Tag标签')
@Controller('/api/tag')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  tag: TagService;

  @Get('/list')
  async getInfo() {
    const tags = await this.tag.getAllTags();
    return tags;
  }
}
