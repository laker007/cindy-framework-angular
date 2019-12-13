export type LangType = 'en-US' | 'zh-CN' | 'zh-TW';

export interface LangInterface {
  lang: LangType;
  setLang: (lang: LangType) => void;
  getLang: () => void;
}

export class CindyDefaultLang implements LangInterface {
  lang: LangType;

  setLang() {

  }

  getLang() {

  }
}
