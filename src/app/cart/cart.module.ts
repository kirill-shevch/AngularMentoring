import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartListComponent, CartComponent],
  exports: [CartListComponent, CartComponent]
})
export class CartModule { }
