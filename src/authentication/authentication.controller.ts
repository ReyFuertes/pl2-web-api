import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, Res, Request } from '@nestjs/common';
import { IChangePasswordPayloadDto, IRegisterPayloadDto, IRegisterResponseDto } from './authentication.dto';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthenticationController {
  constructor(private srv: AuthenticationService) { }

  @Post('change-password')
  changePassword(@Body() dto: IChangePasswordPayloadDto): Promise<IRegisterResponseDto> {
    return this.srv.changePassword(dto);
  }

  @Post('logout')
  logout(@Request() dto: any): Promise<IRegisterResponseDto> {
    const token: string = dto.headers.authorization.replace(/Bearer /g, '');
    return this.srv.logout(token);
  }

  @Post('login')
  login(@Body() dto: IRegisterPayloadDto): Promise<IRegisterResponseDto> {
    return this.srv.login(dto);
  }

  @Post('register')
  register(@Body() dto: IRegisterPayloadDto): Promise<IRegisterResponseDto> {
    return this.srv.register(dto);
  }

  @Get()
  getAll(@Query() dto: any): Promise<any[]> {
    return this.srv.getAccounts(dto);
  }
}
