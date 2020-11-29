import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, Res } from '@nestjs/common';
import { GrandbossService } from './Grandboss.service';

@Controller('grandboss')
export class GrandbossController {
  constructor(private srv: GrandbossService) { }
  
  @Get()
  getGrandBossStatus(@Query() dto: any): Promise<any[]> {
    return this.srv.getGrandBossStatus(dto);
  }
}
