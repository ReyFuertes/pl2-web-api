import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { grandboss_data } from './Grandboss_data.entity';
import { GrandbossRepository } from './grandboss.repository';
@Injectable()
export class GrandbossService extends BaseService<grandboss_data> {
  constructor(@InjectRepository(GrandbossRepository) public repo: GrandbossRepository) {
    super(repo);
  }
  async getGrandBossStatus(dto: any): Promise<any[]> {
    return this.repo.getGrandBossStatus(dto)
  }
}
