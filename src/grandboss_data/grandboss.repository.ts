import { Repository, EntityRepository, getCustomRepository } from 'typeorm';
import * as _ from 'lodash';
import { BadRequestException } from '@nestjs/common';
import { grandboss_data } from './Grandboss_data.entity';

@EntityRepository(grandboss_data)
export class GrandbossRepository extends Repository<grandboss_data> {

  async getGrandBossStatus(dto: any): Promise<any> {
    const gb_repo = getCustomRepository(GrandbossRepository);
    const gb_query = gb_repo.createQueryBuilder('grandboss_data');

    const _results = await gb_query.getMany();

    console.log(_results)

    const results = _results.map((r: any) => {
      return {
        id: r.boss_id,
        status: r.respawn_time
      }
    });

    return results;
  }
}