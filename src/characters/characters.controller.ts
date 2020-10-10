import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query, Res } from '@nestjs/common';
import { ICharacterDto } from './characters.dto';
import { CharacterService } from './characters.service';

@Controller('character')
export class CharacterController {
  constructor(private srv: CharacterService) { }
}
