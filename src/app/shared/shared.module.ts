import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBackgroundColorDirective } from './Directives/highlight.directive';
import { FrameDirective } from './Directives/frame.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChangeBackgroundColorDirective,
    FrameDirective
  ],
  exports: [
    ChangeBackgroundColorDirective,
    FrameDirective
  ]
})
export class SharedModule { }
