import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CartListComponent, CartComponent],
  exports: [CartListComponent, CartRoutingModule]
})
export class CartModule { }
