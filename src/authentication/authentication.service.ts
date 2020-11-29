import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { IChangePasswordPayloadDto, IRegisterPayloadDto, IRegisterResponseDto } from './authentication.dto';
import { Accounts } from './authentication.entity';
import { AutheticationRepository } from './authentication.repository';
@Injectable()
export class AuthenticationService extends BaseService<Accounts> {
  constructor(@InjectRepository(AutheticationRepository) public repo: any) {
    super(repo);
  }

  async changePassword(dto: IChangePasswordPayloadDto): Promise<IRegisterResponseDto> {
    return this.repo.changePassword(dto);
  }

  async logout(token: any): Promise<IRegisterResponseDto> {
    return this.repo.logout(token);
  }

  async login(dto: IRegisterPayloadDto): Promise<IRegisterResponseDto> {
    return this.repo.login(dto);
  }

  async register(dto: IRegisterPayloadDto): Promise<IRegisterResponseDto> {
    return this.repo.register(dto);
  }

  async getAccounts(dto: any): Promise<any[]> {
    return this.repo.getAccounts(dto)
  }
}
