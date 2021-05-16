import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FirstComponent
  ],
  declarations: [FirstComponent]
})
export class CoreModule { }
