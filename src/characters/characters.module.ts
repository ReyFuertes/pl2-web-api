import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CharactersRepository } from './characters.repository';
import { CharacterService } from './characters.service';
import { CharacterController } from './characters.controller';
import { GameOrmConfig } from 'src/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forFeature([CharactersRepository])],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class CharactersModule { }
