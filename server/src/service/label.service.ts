import { Provide } from '@midwayjs/core';
import { InjectRepository } from '@midwayjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Label } from '../mysql/label';

@Provide()
export class LabelService {
  @InjectRepository(Label)
  labelModel: Repository<Label>;

  async getAllTags() {
    const res = await this.labelModel.findAll<Label>({
      where: {},
      attributes: ['id', 'name', 'icon'],
    });
    return res;
  }
}
