import { ICharacterDto } from "src/characters/characters.dto";
export interface IChangePasswordPayloadDto {
  username?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}
export interface IRegisterPayloadDto {
  login: string;
  password: string;
}
export interface IRegisterResponseDto {
  status: AuthType;
}
export interface ILoginResponseDto {
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