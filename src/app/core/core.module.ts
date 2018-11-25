import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {
  NgModule,
  NgModuleFactoryLoader,
  Optional,
  SkipSelf,
  SystemJsNgModuleLoader
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [
    // components that are used in app.component.ts will be listed here.
    TabsComponent
  ],
  declarations: [
    // components that are used in app.component.ts will be listed here.
    TabsComponent
  ],

  providers: [
    /* ``No`` global singleton services of the whole app should be listed here anymore!
       Since they'll be already provided in AppModule using the `tree-shakable providers` of Angular 6.x+ (providedIn: 'root').
       This new feature allows cleaning up the providers section from the CoreModule.
       But if you want to provide something with an InjectionToken other that its class, you still have to use this section.
    */
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('CoreModule should be imported ONLY in AppModule.');
    }
  }
}
