export enum Language {
  ENGLISH = 'en',
  SPANISH = 'es',
  PORTUGUESE = 'pt',
  FRENCH = 'fr',
  DEUTSCH = 'de',
  ITALIAN = 'it',
}

type LanguageMap = {
  [key in string]: string;
};

export const Languages: LanguageMap = {
  English: Language.ENGLISH,
  Spanish: Language.SPANISH,
  Portuguese: Language.PORTUGUESE,
  French: Language.FRENCH,
  Deutsch: Language.DEUTSCH,
  Italian: Language.ITALIAN,
};
