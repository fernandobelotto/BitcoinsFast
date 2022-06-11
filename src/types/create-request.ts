import { CustomPlatform } from '../constants/plataform';

export type CreateRequestBody = {
  email_address: string;
  platform: CustomPlatform;
  language: string;
  country: string;
  state?: string;
};
