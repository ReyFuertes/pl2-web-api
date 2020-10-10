import { Repository, EntityRepository } from 'typeorm';
import * as _ from 'lodash';
import { BadRequestException } from '@nestjs/common';
import { Characters } from './characters.entity';
import { ICharacterDto } from './characters.dto';


@EntityRepository(Characters)
export class CharacterRepository extends Repository<Characters> {
}