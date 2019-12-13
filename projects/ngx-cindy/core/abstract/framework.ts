/**
 * CindyFramework 框架类 单例模式
 */
export class CindyFramework {

  static environment: Environment;
  private static cindyFramework: CindyFramework;

  private constructor() { }

  static getInstance() {
    if (this.cindyFramework === undefined) {
        this.cindyFramework = new CindyFramework();
    }
    return this.cindyFramework;
  }

  init(environment: Environment) {
    this.setEnvironment(environment);
  }

  setEnvironment(environment: Environment) {
    CindyFramework.environment = environment;
  }
}

/**
 * Angular environment 配置的环境变量
 */
export interface Environment {

  /**
   * 网关地址
   */
  serverAddress: string;
  /**
   * 是否是生产模式
   */
  production: boolean;
  /**
   * 开发阶段时，是否支持热更新
   */
  hmr?: boolean;
  /**
   * 产品名称
   */
  productName?: any;
  /**
   * 产品编号
   */
  version?: any;

  [key: string]: any;

}
