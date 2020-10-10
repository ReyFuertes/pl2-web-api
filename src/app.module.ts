import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './authentication/authentication.module';
import { CharacterModule } from './characters/characters.module';
import { GameOrmConfig, LoginOrmConfig } from './config/typeorm.config';
@Module({
  imports: [
    TypeOrmModule.forRoot(LoginOrmConfig),
    TypeOrmModule.forRoot(GameOrmConfig),
    AccountsModule,
    CharacterModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
