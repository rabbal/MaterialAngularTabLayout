import { Type, ValueProvider } from '@angular/core';

export interface OpenNewTabModel {
  label: string;
  componentType: Type<any>;
  iconName: string;
  modulePath?: any;
  data?: ValueProvider[];
}
