import { Catch, HttpStatus } from '@midwayjs/core';
import { BaseErrorFilter } from './base.filter';

@Catch()
export class BadRequestFilter extends BaseErrorFilter {
  constructor() {
    super(HttpStatus.BAD_REQUEST);
  }
}
