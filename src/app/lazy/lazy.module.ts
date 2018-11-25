import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [LazyComponent],
  entryComponents: [LazyComponent]
})
export class LazyModule {}
