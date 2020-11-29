import { Repository, EntityRepository, getCustomRepository } from 'typeorm';
import * as _ from 'lodash';
import { Accounts } from './authentication.entity';
import { IRegisterPayloadDto, IRegisterResponseDto, AuthType, ILoginResponseDto, IChangePasswordPayloadDto } from './authentication.dto';
import { BadRequestException } from '@nestjs/common';
import { CharactersRepository } from 'src/characters/characters.repository';
import { ICharacterDto } from 'src/characters/characters.dto';
const sha1 = require('sha1');
const utf8 = require('utf8');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

@EntityRepository(Accounts)
export class AutheticationRepository extends Repository<Accounts> {
  async changePassword(dto: IChangePasswordPayloadDto): Promise<any> {
    /* hash password */
    const password = utf8.encode(dto.currentPassword)
    const hashPassword = crypto.createHash('sha1').update(password).digest('base64');

    const match = await this.findOne({ login: dto.username });
   
    if (match) {
      /* add condition of access level of admins */

      if (match.password === hashPassword) {

        /* check if two passwords matched */
        if(dto.newPassword === dto.confirmNewPassword) {
          const hashNewPassword = crypto.createHash('sha1').update(dto.newPassword).digest('base64');

          const payload = {
            login: dto.username,
            password: hashNewPassword
          }
          await this.save(payload);
        } else {
          throw new BadRequestException({ status: AuthType.failed });
        }
        return { status: AuthType.success };
      } else {
        throw new BadRequestException({ status: AuthType.failed });
      }
    } else {
      throw new BadRequestException({ status: AuthType.failed });
    }
  }

  async logout(token: any): Promise<any> {
    const match = await this.findOne({ token: token });
    if (match) {
      match.token = null;
      await this.save(match);
      return { status: AuthType.success }
    } else {
      throw new BadRequestException({ status: AuthType.failed });
    }
  }

  async login(dto: IRegisterPayloadDto): Promise<ILoginResponseDto> {
    /* hash password */
    const password = utf8.encode(dto.password)
    const hashPassword = crypto.createHash('sha1').update(password).digest('base64');

    const match = await this.findOne({ login: dto.login });
    if (match) {
      /* add condition of access level of admins */
      if (match.password === hashPassword) {

        /* save token */
        var token = crypto.randomBytes(20).toString('hex');
        match.token = token;
        await this.save(match);

        const char_repo = getCustomRepository(CharactersRepository);
        const char_query = char_repo.createQueryBuilder('characters');
        let results: any[] = await char_query
          .where('account_name = :account_name', { account_name: match.login })
          .getRawMany();

        if(results && results.length === 0) {
          throw new BadRequestException({ status: AuthType.failed });
        }

        const account_name: string = results[0].characters_account_name;

        const characters = results.map((r: any) => {
          return {
            char_name: r.characters_char_name,
            level: r.characters_level,
            maxHp: r.characters_maxHp,
            curHp: r.characters_curHp,
            maxCp: r.characters_maxCp,
            maxMp: r.characters_maxMp,
            curMp: r.characters_curMp,
            exp: r.characters_exp,
            onlinetime: r.characters_onlinetime,
          }
        })

        const detail = { account_name, characters };

        return { status: AuthType.success, detail, token };
      } else {
        throw new BadRequestException({ status: AuthType.failed });
      }
    } else {
      throw new BadRequestException({ status: AuthType.failed });
    }
  }

  async register(dto: IRegisterPayloadDto): Promise<IRegisterResponseDto> {
    /* hash password */
    const password = utf8.encode(dto.password);
    const hashPassword = crypto.createHash('sha1').update(password).digest('base64');

    const payload = {
      login: dto.login,
      password: hashPassword
    }

    const match = await this.findOne({ login: dto.login });
    if (!match) {
      await this.save(payload);
      return { status: AuthType.success }
    } else {
      throw new BadRequestException({ status: AuthType.failed });
    }
  }

  async getAccounts(dto: any): Promise<Accounts[]> {
    const query = this.createQueryBuilder('accounts');
    _.mapValues(dto, _.method('toLowerCase')); /* convert values to lowercases */
    const where = dto;
    const page = Object.assign({}, {
      take: dto.take,
      skip: dto.skip
    });
    delete where.skip, where.take;

    if (where && Object.keys(where)) {
      Object.entries(where).forEach(c => {
        /* transform entries into object */
        const obj = Object.assign({}, Object.entries(c)
          .reduce((acc, [k, v]) => ({ ...acc, [c[0]]: v }), {})
        );

        query.orWhere(`${Object.keys(obj)} = :${Object.keys(obj)}`, obj)
      });
    }
    const results = await query.skip(page.skip).take(page.take)
      .getMany();

    return results;
  }
}