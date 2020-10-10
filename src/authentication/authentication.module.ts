import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AutheticationRepository } from './authentication.repository';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([AutheticationRepository])],
  controllers: [AuthenticationController],
  providers: [AuthenticationService]
})
export class AccountsModule { }
