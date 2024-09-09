import { Provide } from '@midwayjs/core';
import { customAlphabet } from 'nanoid';

@Provide()
export class IdService {
  idGenerator = customAlphabet('abcdefghijklmnopqrstuvwxyz123456789', 9);

  genId(prefix: string) {
    return prefix + this.idGenerator();
  }
}
