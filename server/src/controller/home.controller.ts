import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ApiOperation, ApiResponse, ApiTags } from '@midwayjs/swagger';
import { GetStatusResponseDTO } from './home.dto';

@ApiTags('Home 根路径请求')
@Controller()
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/status')
  @ApiOperation({
    description: '获取服务器运行状态',
  })
  @ApiResponse({
    status: 200,
    description: '服务器的运行状态',
    type: GetStatusResponseDTO,
  })
  async home() {
    return {
      message: 'Hey Bro.',
      running: true,
    };
  }

  @Get('/')
  async getHome() {
    this.ctx.skipFormat = true;
    await this.ctx.render('index', {
      data: 'world',
    });
  }
}
