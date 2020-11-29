import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, Res } from '@nestjs/common';
import { ICharacterDto } from './characters.dto';
import { CharacterService } from './characters.service';

@Controller('character')
export class CharacterController {
  constructor(private srv: CharacterService) { }

  @Get('/pk')
  getPkKills(@Query() dto: any): Promise<any[]> {
    return this.srv.getPkKills(dto);
  }

  @Get('/pvp')
  getPvpKills(@Query() dto: any): Promise<any[]> {
    return this.srv.getPvpKills(dto);
  }

  @Get()
  getOnlineCount(@Query() dto: any): Promise<any[]> {
    return this.srv.getOnlineCount(dto);
  }
}
