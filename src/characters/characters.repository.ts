import { Repository, EntityRepository, getCustomRepository } from 'typeorm';
import * as _ from 'lodash';
import { BadRequestException } from '@nestjs/common';
import { Characters } from './characters.entity';
import { ICharacterDto } from './characters.dto';

@EntityRepository(Characters)
export class CharactersRepository extends Repository<Characters> {

  async getPkKills(dto: any): Promise<any> {
    const char_repo = getCustomRepository(CharactersRepository);
    const char_query = char_repo.createQueryBuilder('characters');

    const _results = await char_query
      .orderBy("pkKills", "DESC")
      .take(10)
      .getMany();

    const results = _results.map(r => {
      return {
        name: r.char_name,
        pkkills: r.pkkills
      }
    });

    return results;
  }

  async getPvpKills(dto: any): Promise<any> {
    const char_repo = getCustomRepository(CharactersRepository);
    const char_query = char_repo.createQueryBuilder('characters');

    const _results = await char_query
      .orderBy("pvpkills", "DESC")
      .take(10)
      .getMany();

    const results = _results.map(r => {
      return {
        name: r.char_name,
        pvpkills: r.pvpkills
      }
    });

    return results;
  }

  async getOnlineCount(dto: any): Promise<any> {
    const char_repo = getCustomRepository(CharactersRepository);
    const char_query = char_repo.createQueryBuilder('characters');

    const results = await char_query
      .where('online = :online', { online: 1 })
      .getCount();

    const count = results > 5 ? results + 10 : results;

    return count;
  }
}