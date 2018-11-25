import { BehaviorSubject, Observable } from 'rxjs';
import {
  Injectable,
  Injector,
  NgModuleFactory,
  NgModuleFactoryLoader
} from '@angular/core';

import { OpenNewTabModel } from '../models/open-new-tab-model';
import { TabItem } from '../models/tab-item';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private tabItemSubject: BehaviorSubject<TabItem[]> = new BehaviorSubject<
    TabItem[]
  >([]);

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {}

  get tabItems$(): Observable<TabItem[]> {
    return this.tabItemSubject.asObservable();
  }

  open(newTab: OpenNewTabModel) {
    if (newTab.modulePath) {
      this.loader
        .load(newTab.modulePath)
        .then((moduleFactory: NgModuleFactory<any>) => {
          this.openInternal(newTab, moduleFactory);
        });
    } else {
      this.openInternal(newTab);
    }
  }

  private openInternal(newTab: OpenNewTabModel, moduleFactory?: NgModuleFactory<any>) {
    const newTabItem: TabItem = {
      label: newTab.label,
      iconName: newTab.iconName,
      component: {
        componentType: newTab.componentType,
        moduleFactory: moduleFactory,
        injector: newTab.data
          ? Injector.create(newTab.data, this.injector)
          : this.injector
      }
    };

    this.tabItemSubject.getValue().push(newTabItem);
    this.tabItemSubject.next(this.tabItemSubject.getValue());
  }

  close(index: number) {
    this.tabItemSubject.getValue().splice(index, 1);
    this.tabItemSubject.next(this.tabItemSubject.getValue());
  }
}
