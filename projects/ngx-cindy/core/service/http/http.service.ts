import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CindyFramework } from '../../abstract/framework';

@Injectable()

export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  /**
   *
   * @param moduleName 微服务模块名称，如果没有写 ''
   * @param url 服务地址
   * @param body 参数
   */
  post(moduleName: string, url: string, body: any, options?) {
    const fullUrl = `${CindyFramework.environment.serverAddress}/${moduleName}/${url}`;
    console.log(fullUrl);
    return this.httpClient.post(fullUrl, body);
  }

  get(moduleName: string, url: string, options?) {
    const fullUrl = `${CindyFramework.environment.serverAddress}/${moduleName}/${url}`;
    console.log(fullUrl);
    return this.httpClient.get(fullUrl);
  }

}
