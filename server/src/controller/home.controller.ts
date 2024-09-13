import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ApiOperation, ApiResponse, ApiTags } from '@midwayjs/swagger';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Label } from '../entity/label.mysql';
import { GetStatusResponseDTO } from './home.dto';

@ApiTags('Home 根路径请求')
@Controller()
export class HomeController {
  @InjectEntityModel(Label)
  private labelModel: Repository<Label>;

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
    const tags = [
      {
        name: '餐饮',
        icon: 'food',
      },
      {
        name: '购物',
        icon: 'shopping',
      },

      {
        name: '日用',
        icon: 'daily-necessities',
      },
      {
        name: '交通',
        icon: 'traffic',
      },
      {
        name: '蔬菜',
        icon: 'vegetables',
      },
      {
        name: '水果',
        icon: 'fruits',
      },
      {
        name: '零食',
        icon: 'snacks',
      },
      {
        name: '运动',
        icon: 'sport',
      },
      {
        name: '娱乐',
        icon: 'fun',
      },
      {
        name: '通讯',
        icon: 'communication',
      },
      {
        name: '服饰',
        icon: 'clothes',
      },
      {
        name: '美容',
        icon: 'cosmetology',
      },
      {
        name: '家庭',
        icon: 'housing',
      },
      {
        name: '社交',
        icon: 'social',
      },
      {
        name: '旅行',
        icon: 'travel',
      },
      {
        name: '数码',
        icon: 'digital',
      },
      {
        name: '汽车',
        icon: 'car',
      },
      {
        name: '书籍',
        icon: 'book',
      },
      {
        name: '学习',
        icon: 'tuition',
      },
      {
        name: '宠物',
        icon: 'pets',
      },
      {
        name: '礼金',
        icon: 'cash-gift',
      },
      {
        name: '办公',
        icon: 'work',
      },
      {
        name: '彩票',
        icon: 'lottery',
      },
      {
        name: '快递',
        icon: 'express',
      },
      {
        name: '其他',
        icon: 'bonus',
      },
      {
        name: '设置',
        icon: 'bonus',
      },
    ];
    tags.forEach(async ({ name, icon }) => {
      console.log(
        await this.labelModel.insert({
          name,
          icon,
        })
      );
    });
    return {
      message: 'Hey Bro.',
      running: true,
    };
  }

  @Get('/')
  async getHome() {
    this.ctx.skipFormat = true;
    this.ctx.set({
      'Cache-Control': 'no store',
    });
    await this.ctx.render('index', {
      data: 'niubi',
    });
  }
}
