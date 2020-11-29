import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GrandbossRepository } from './Grandboss.repository';
import { GrandbossService } from './Grandboss.service';
import { GrandbossController } from './Grandboss.controller';
import { GameOrmConfig } from 'src/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forFeature([GrandbossRepository])],
  controllers: [GrandbossController],
  providers: [GrandbossService]
})
export class GrandbossDataModule { }
