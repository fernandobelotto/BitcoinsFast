import { Language } from '../constants/language';
import { Plataform } from '../constants/plataform';

export type CreateRequestBody = {
  email_address: string;
  platform: Plataform;
  language: Language;
  country: string;
  state: string;
};
