import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { ICharacterDto } from './characters.dto';
import { Characters } from './characters.entity';
import { CharactersRepository } from './characters.repository';
@Injectable()
export class CharacterService extends BaseService<Characters> {
  constructor(@InjectRepository(CharactersRepository) public repo: CharactersRepository) {
    super(repo);
  }
  
  async getPkKills(dto: any): Promise<any[]> {
    return this.repo.getPkKills(dto)
  }

  async getPvpKills(dto: any): Promise<any[]> {
    return this.repo.getPvpKills(dto)
  }

  async getOnlineCount(dto: any): Promise<any[]> {
    return this.repo.getOnlineCount(dto)
  }
}
