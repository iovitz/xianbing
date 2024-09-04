import { App, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import cryptoJS from 'crypto-js';
import * as pako from 'pako';

@Provide()
export class EncryptService {
  @App()
  app: Application;

  ungzip(gzipBase64Str: string) {
    return JSON.parse(
      pako.ungzip(Buffer.from(gzipBase64Str, 'base64'), { to: 'string' })
    );
  }

  gzip(data: unknown) {
    return this.strToGzipBase64(JSON.stringify(data));
  }

  strToGzipBase64(str: string) {
    return Buffer.from(pako.gzip(str, { level: 9 })).toString('base64');
  }
  comparePassword(p: string, hash: string) {
    return p === hash;
  }

  async encryptPassword(password) {
    return password;
  }
  aesEncrypt(message) {
    return cryptoJS.AES.encrypt(message, '').toString();
  }

  aesDecrypt(encrypted) {
    return cryptoJS.AES.decrypt(encrypted, '').toString(cryptoJS.enc.Utf8);
  }
}
