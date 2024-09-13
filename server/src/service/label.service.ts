import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Label } from '../entity/label.mysql';

@Provide()
export class LabelService {
  @InjectEntityModel(Label)
  labelModel: Repository<Label>;

  async getAllTags() {
    const res = await this.labelModel.find({
      select: {
        id: true,
        pid: true,
        name: true,
        icon: true,
      },
    });
    return res;
  }
}
