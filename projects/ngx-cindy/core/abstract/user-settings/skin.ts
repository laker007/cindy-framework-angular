export type SkinType = 'red' | 'light' | 'default' | 'wathet';

export interface SkinInterface {
  skin: SkinType;
  setSkin: (skin: SkinType) => void;
  getSkin: () => void;
}

export class CindyDefaultSkin implements SkinInterface {
  skin: SkinType;

  setSkin() {

  }

  getSkin() {

  }
}
