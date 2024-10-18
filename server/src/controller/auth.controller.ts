import { Inject, Controller, Post, Body } from '@midwayjs/core';
import { BadRequestError } from '@midwayjs/core/dist/error/http';
import { Context } from '@midwayjs/koa';
import { RegisterDTO, LoginDTO, LoginSuccessDTO } from './auth.dto';
import { AuthService } from '../service/auth.service';
import { EncryptService } from '../service/encrypt.service';
import { UserService } from '../service/user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@midwayjs/swagger';
import { VerifyService } from '../service/verify.service';

@ApiTags('Auth Module')
@Controller('/api/auth')
export class APIController {
  @Inject()
  private ctx: Context;

  @Inject()
  private auth: AuthService;

  @Inject()
  private user: UserService;

  @Inject()
  private encrypt: EncryptService;

  @Inject()
  private verify: VerifyService;

  @Post('/register')
  @ApiOperation({
    description: '用户注册',
  })
  @ApiResponse({
    status: 200,
    description: '注册成功的用户信息',
    type: LoginSuccessDTO,
  })
  async register(@Body() body: RegisterDTO) {
    // 校验验证码
    // 本地开发环境时，允许跳过验证码逻辑（有点入侵）
    if (this.ctx.app.getEnv() !== 'local' && body.code !== 'PASS') {
      const isVerifyCodeRight = this.verify.checkVerifyCode(
        this.ctx.session,
        'register',
        body.code
      );

      if (!isVerifyCodeRight) {
        throw new BadRequestError('请求错误');
      }
    }

    // 创建用户
    const userProfile = await this.auth.createUser(body.email, body.password);

    // 创建Session
    const session = await this.auth.createSession(
      userProfile.id,
      this.ctx.request.header['user-agent']
    );
    // 写入Cookie
    this.ctx.set('session-id', session);

    return {
      userId: userProfile.id,
      avatar: userProfile.avatar ?? null,
      nickname: userProfile.nickname,
      email: body.email,
      session,
    };
  }

  @Post('/login')
  @ApiOperation({
    description: '登录接口',
  })
  @ApiResponse({
    status: 200,
    description: '登录成功的用户信息',
    type: LoginSuccessDTO,
  })
  async login(@Body() body: LoginDTO) {
    // 校验验证码
    // 本地开发环境时，允许跳过验证码逻辑（有点入侵）
    if (this.ctx.app.getEnv() !== 'local' && body.code !== 'PASS') {
      const isVerifyCodeRight = this.verify.checkVerifyCode(
        this.ctx.session,
        'login',
        body.code
      );

      if (!isVerifyCodeRight) {
        throw new BadRequestError('请求错误');
      }
    }

    const existsUser = await this.auth.findUserBy({ email: body.email }, [
      'id',
      'password',
    ]);

    // 登录
    if (
      !existsUser ||
      !this.encrypt.md5Match(body.password, existsUser.password)
    ) {
      throw new BadRequestError('密码错误');
    }

    const [userProfile, session] = await Promise.all([
      // Get User Profile
      this.user.getUserProfileBy(
        {
          id: existsUser.id,
        },
        ['id', 'nickname', 'avatar']
      ),
      // Crate Session ID
      this.auth.createSession(
        existsUser.id,
        this.ctx.request.header['user-agent']
      ),
    ]);

    // 写入Cookie
    this.ctx.set('session-id', session);

    return {
      userId: userProfile.id,
      avatar: userProfile.avatar,
      nickname: userProfile.nickname,
      email: body.email,
      session,
    };
  }
}
