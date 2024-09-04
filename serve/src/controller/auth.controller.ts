import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { CheckRegisterDTO } from '../dto/user.dto';
import { AuthService } from '../service/auth.service';

@Controller('/api/auth')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  auth: AuthService;

  @Get('/check')
  async checkRegister(@Query() query: CheckRegisterDTO) {
    const exists = await this.auth.findUserByEmail(query.email);
    return !!exists;
  }
}
