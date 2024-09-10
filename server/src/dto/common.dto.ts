import { ApiProperty, Type } from '@midwayjs/swagger';

type Res<T> = {
  code: number;
  message: string;
  data: T;
};

export function SuccessResponse<T>(ResourceCls: Type<T>): Type<Res<T>> {
  class Successed {
    @ApiProperty({ description: '状态码', default: 0 })
    code: number;

    @ApiProperty({ description: '消息', default: 'success' })
    message: string;

    @ApiProperty({
      type: ResourceCls,
      default: null,
    })
    data: T;
  }

  return Successed;
}
