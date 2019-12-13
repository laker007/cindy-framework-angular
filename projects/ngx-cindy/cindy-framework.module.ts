import { ModuleWithProviders, NgModule } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd';

import { CoreModule } from './core/core.module';

import {  OWModule } from './components/ow/ow.module';

export * from './core/index';
export * from './components/ow/index';

@NgModule({
  exports: [
    CoreModule,
    OWModule
  ]
})
export class CindyFrameworkModule {
  /**
   * @deprecated Use `CindyFrameworkModule` instead.
   */
  static forRoot(): ModuleWithProviders {
    warnDeprecation(
      `'forRoot' is not recommended if you are using Angular 6.0.0+. This API is going to be removed in 9.0.0.`
    );
    return {
      ngModule: CindyFrameworkModule
    };
  }
}
