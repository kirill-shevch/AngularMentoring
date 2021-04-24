import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartListComponent],
  exports: [CartListComponent]
})
export class CartModule { }
