import { Provide } from '@midwayjs/core';
import { InjectRepository } from '@midwayjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Bill, BillParams } from '../mysql/bill';
import { Label } from '../mysql/label';

@Provide()
export class BillService {
  @InjectRepository(Label)
  Label: Repository<Label>;

  @InjectRepository(Bill)
  Bill: Repository<Bill>;

  async getAllTags() {
    const res = await this.Label.findAll<Label>({
      where: {},
      attributes: ['id', 'name', 'icon'],
    });
    return res;
  }

  createBill(data: Partial<BillParams>) {
    return this.Bill.create({
      type: data.type,
      money: data.money,
      labelId: data.labelId,
      userId: data.userId,
    });
  }
}
