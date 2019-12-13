export type LayoutType = 'side' | 'top' | 'one';

export interface LayoutInterface {
  layout: LayoutType;
  setLayout: (layout: LayoutType) => void;
  getLayout: () => void;
}

export class CindyDefaultLayout implements LayoutInterface {
  // 默认菜单在侧边栏
  layout: LayoutType = 'side';

  getLayout() {
    return this.layout;
  }

  setLayout(layout: LayoutType) {
    this.layout = layout;
  }
}
