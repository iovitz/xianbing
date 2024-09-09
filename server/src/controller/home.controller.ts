import { Controller, Get } from '@midwayjs/core';
import { ApiTags } from '@midwayjs/swagger';

@ApiTags('api')
@Controller('/api')
export class HomeController {
  @Get('/status')
  async home(): Promise<string> {
    return 'Hey Bro.';
  }
}
