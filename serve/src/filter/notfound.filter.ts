import { Catch, httpError, HttpStatus } from '@midwayjs/core';
import { BaseErrorFilter } from './base.filter';

@Catch(httpError.NotFoundError)
export class NotFoundFilter extends BaseErrorFilter {
  constructor() {
    super(HttpStatus.NOT_FOUND);
  }
}
