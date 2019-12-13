import { LayoutType, LayoutInterface } from './layout';
import { LangType, LangInterface } from './lang';
import { SkinType, SkinInterface } from './skin';

export interface UserSettingsInterface {
  layout: LayoutType;
  lang: LangType;
  skin: SkinType;
  getLayout: () => void;
  setLayout: (layout: LayoutType) => void;
  getLang: () => void;
  setLang: (lang: LangType) => void;
  getSkin: () => void;
  setSkin: (skin: SkinType) => void;
}

export class CindyDefaultUserConfig implements UserSettingsInterface {
  layout: LayoutType;
  lang: LangType;
  skin: SkinType;

  constructor(
    private layoutInterface: LayoutInterface,
    private skinInterface: SkinInterface,
    private langInterface: LangInterface
  ) {
    this.layout = layoutInterface.layout;
    this.lang = langInterface.lang;
    this.skin = skinInterface.skin;
  }

  setSkin(skin: SkinType) {
    this.skinInterface.setSkin(skin);
  }

  getSkin() {
    return this.skin;
  }

  setLayout(layout: LayoutType) {
    this.layoutInterface.setLayout(layout);
  }

  getLayout() {
    return this.layout;
  }

  setLang(lang: LangType) {
    this.langInterface.setLang(lang);
  }

  getLang() {
    return this.lang;
  }
}
