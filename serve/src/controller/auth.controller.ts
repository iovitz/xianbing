import { Inject, Controller, Get, Query, Post, Body } from '@midwayjs/core';
import { BadRequestError } from '@midwayjs/core/dist/error/http';
import { Context } from '@midwayjs/koa';
import { CheckRegisterDTO, LoginDTO } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';
import { EncryptService } from '../service/encrypt.service';
import { UserService } from '../service/user.service';

@Controller()
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  auth: AuthService;

  @Inject()
  user: UserService;

  @Inject()
  encrypt: EncryptService;

  @Get('/api/auth/check')
  async checkRegister(@Query() query: CheckRegisterDTO) {
    const exists = await this.auth.findUserBy({ email: query.email }, ['id']);
    return !!exists;
  }

  @Post('/api/auth/login')
  async login(@Body() body: LoginDTO) {
    // 校验验证码
    // const isVerifyCodeRight = VerifyService.checkVerifyCode(this.req.session, 'login', input.code);

    // if (!isVerifyCodeRight) {
    //   return exits.badRequest('验证码错误');
    // }

    const existsUser = await this.auth.findUserBy({ email: body.email }, [
      'id',
      'password',
    ]);

    if (body.register) {
      // 注册用户
      if (existsUser) {
        throw new BadRequestError('用户已存在');
      }
    } else {
      // 登录
      if (
        !existsUser ||
        !this.encrypt.md5Match(body.password, existsUser.password)
      ) {
        throw new BadRequestError('密码错误');
      }
    }

    const [userProfile, sessionId] = await Promise.all([
      this.user.getUserProfileBy(
        {
          id: existsUser.id,
        },
        {
          id: true,
        }
      ),
      this.auth.createSession(existsUser.id),
    ]);

    return {
      ...userProfile,
      session: sessionId,
    };
  }
}
