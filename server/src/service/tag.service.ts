import { Provide } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from '../entity/tags.entity';

@Provide()
export class TagService {
  @InjectEntityModel(Tag)
  tagModel: Repository<Tag>;

  async getAllTags() {
    const res = await this.tagModel.find();
    return res;
  }
}
