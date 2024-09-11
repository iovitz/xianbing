import { Controller, Get } from '@midwayjs/core';
import { ApiOperation, ApiResponse, ApiTags } from '@midwayjs/swagger';
import { GetStatusResponseDTO } from './home.dto';

@ApiTags('api')
@Controller('/api')
export class HomeController {
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
}
