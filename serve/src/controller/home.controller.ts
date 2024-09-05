import { Controller, Get } from '@midwayjs/core';

@Controller('/api')
export class HomeController {
  @Get('/verify-code')
  async home(): Promise<string> {
    return 'Hey Bro.';
  }
}
