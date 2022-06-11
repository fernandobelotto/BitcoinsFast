import { CustomPlatform } from '../constants/plataform';

export type LoginRequestBody = {
  email_address: string;
  plataform: CustomPlatform;
};
