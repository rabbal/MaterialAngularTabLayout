import { Component } from '@angular/core';
import { IdModel } from './core/models/id-model';
import { LazyComponent } from './lazy/lazy.component';
import { OpenNewTabModel } from './core/models/open-new-tab-model';
import { TabService } from './core/services/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MaterialAngularTabLayout';
  constructor(private tabService: TabService) {}
  loadLazyComponent() {
    this.tabService.open(<OpenNewTabModel>{
      label: 'Loaded Lazy Component',
      iconName: 'thumb_up',
      componentType: LazyComponent,
      modulePath: 'src/app/lazy/lazy.module#LazyModule',
      data: [{ provide: IdModel, useValue: <IdModel>{ id: 1 } }]
    });
  }
}
