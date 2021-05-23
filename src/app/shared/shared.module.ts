import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBackgroundColorDirective } from './directives/highlight.directive';
import { FrameDirective } from './directives/frame.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChangeBackgroundColorDirective,
    FrameDirective,
    OrderByPipe
  ],
  exports: [
    ChangeBackgroundColorDirective,
    FrameDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
