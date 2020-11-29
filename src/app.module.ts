import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './authentication/authentication.module';
import { CharactersModule } from './characters/characters.module';
import { GameOrmConfig, LoginOrmConfig } from './config/typeorm.config';
import { GrandbossDataModule } from './grandboss_data/grandboss.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(LoginOrmConfig),
    TypeOrmModule.forRoot(GameOrmConfig),
    AccountsModule,
    CharactersModule,
    GrandbossDataModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
