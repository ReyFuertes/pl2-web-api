import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { ICharacterDto } from './characters.dto';
import { Characters } from './characters.entity';
import { CharacterRepository } from './characters.repository';
@Injectable()
export class CharacterService extends BaseService<Characters> {
  constructor(@InjectRepository(CharacterRepository) public repo: CharacterRepository) {
    super(repo);
  }
}
