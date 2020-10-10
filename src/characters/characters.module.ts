import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CharacterRepository } from './characters.repository';
import { CharacterService } from './characters.service';
import { CharacterController } from './characters.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterRepository])],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class CharacterModule { }
