import { Controller, Get } from '@midwayjs/core';

@Controller('/api')
export class HomeController {
  @Get('/status')
  async home(): Promise<string> {
    return 'Hey Bro.';
  }
}
