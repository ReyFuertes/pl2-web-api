import { ICharacterDto } from "src/characters/characters.dto";

export class IRegisterPayloadDto {
  login: string;
  password: string;
}
export class IRegisterResponseDto {
  status: AuthType;
}
export class ILoginResponseDto {
  status: AuthType;
  detail: {
    characters: ICharacterDto[]
  };
  token: string;
}
export enum AuthType {
  success = 'success',
  failed = 'failed'
}