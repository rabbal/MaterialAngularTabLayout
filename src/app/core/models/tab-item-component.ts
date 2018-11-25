import { Injector, NgModuleFactory, Type } from '@angular/core';

export interface TabItemComponent {
  componentType: Type<any>;
  moduleFactory?: NgModuleFactory<any>;
  injector: Injector;
}
