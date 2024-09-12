import { Controller, Get, Inject, Query } from '@midwayjs/core';
import { GetVerifyCodeDTO } from './security.dto';
import { VerifyService } from '../service/verify.service';
import { Context } from '@midwayjs/koa';
import { ApiTags } from '@midwayjs/swagger';

@ApiTags('Security安全相关')
@Controller('/api/security')
export class SecurityController {
  @Inject()
  ctx: Context;

  @Inject()
  verify: VerifyService;

  @Get('/verify-code')
  async getSvgContent(@Query() query: GetVerifyCodeDTO) {
    const { data, text: code } = this.verify.getVerifyCode(
      query.width,
      query.height,
      4
    );

    this.ctx.session[`#c_${query.type}`] = code;
    this.ctx.session[`#t_${query.type}`] = Date.now();

    if (query.svg) {
      this.ctx.skipFormat = true;
    }
    return data;
  }
}
