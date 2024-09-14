import { Inject, Controller, Get, Query, Post, Body } from '@midwayjs/core';
import { BadRequestError } from '@midwayjs/core/dist/error/http';
import { Context } from '@midwayjs/koa';
import {
  CheckRegisterDTO,
  CheckRegisterResponseDTO,
  LoginDTO,
  LoginResponseDTO,
} from './auth.dto';
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

  @Get('/check')
  @ApiOperation({
    description: '检查用户是否已经登录过',
  })
  @ApiResponse({
    status: 200,
    description: '检查是否需要注册（Email在数据库中不存在时，需要注册）',
    type: CheckRegisterResponseDTO,
  })
  async checkRegister(@Query() query: CheckRegisterDTO) {
    const exists = await this.auth.findUserBy({ email: query.email }, ['id']);
    return !!exists;
  }

  @Post('/login')
  @ApiOperation({
    description: '登录和注册的共用接口',
  })
  @ApiResponse({
    status: 200,
    description: '登录成功的用户信息',
    type: LoginResponseDTO,
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

    if (body.register) {
      // 注册用户
      if (existsUser) {
        throw new BadRequestError('用户已存在');
      }

      // 创建用户
      const userProfile = await this.auth.createUser(body.email, body.password);

      // 创建Session
      const session = await this.auth.createSession(
        userProfile.id,
        this.ctx.request.header['user-agent']
      );

      return {
        userId: userProfile.id,
        avatar: userProfile.avatar,
        nickname: userProfile.nickname,
        session,
      };
    } else {
      // 登录
      if (
        !existsUser ||
        !this.encrypt.md5Match(body.password, existsUser.password)
      ) {
        throw new BadRequestError('密码错误');
      }
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

    return {
      userId: userProfile.id,
      avatar: userProfile.avatar,
      nickname: userProfile.nickname,
      session,
    };
  }
}
