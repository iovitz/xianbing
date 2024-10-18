import { Inject, Controller, Get, Del, Post, Patch } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { BillService } from '../service/bill.service';
import { UserService } from '../service/user.service';

@Controller('/bill')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  bill: BillService;

  @Get('labels')
  async getInfo() {
    const tags = await this.bill.getAllTags();
    console.log(tags);
    return tags;
  }

  @Get('bill')
  async getBill() {
    const tags = await this.bill.getAllTags();
    return tags;
  }

  @Post('bill')
  async postBill() {
    // this.bill;
  }

  @Patch('bill')
  async patchBill() {}

  @Del('bill')
  async delBill() {}
}
