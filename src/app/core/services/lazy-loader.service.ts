import { Injectable, Type, Compiler, NgModuleFactory } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {
  constructor(private compiler: Compiler) {}
  /**
   * lazy load a module
   *
   * @param  path as function, ex: import('./src/path/to/lazy.module').then(m => m.LazyModule)
   * @returns Promise<NgModuleFactory<any>>
   */
  loadModule(path: any): Promise<NgModuleFactory<any>> {
    return (path() as Promise<NgModuleFactory<any> | Type<any>>).then(
      elementModuleOrFactory => {
        if (elementModuleOrFactory instanceof NgModuleFactory) {
          // if ViewEngine
          return elementModuleOrFactory;
        } else {
          try {
            // if Ivy
            return this.compiler.compileModuleAsync(elementModuleOrFactory);
          } catch (err) {
            throw err;
          }
        }
      }
    );
  }
}
