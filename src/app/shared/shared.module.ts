import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBackgroundColorDirective } from './Directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChangeBackgroundColorDirective
  ],
  exports: [
    ChangeBackgroundColorDirective
  ]
})
export class SharedModule { }
