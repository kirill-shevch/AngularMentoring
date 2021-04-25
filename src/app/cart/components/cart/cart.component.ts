import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../../models/cartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cartProduct: CartProduct = { name: 'default', price: 0, count: 1 };

  @Output()
  add = new EventEmitter<any>();

  @Output()
  decreaseCount = new EventEmitter<string>();

  @Output()
  remove = new EventEmitter<string>();

  public addProduct(name: string, price: number): void {
    this.add.emit({ name, price });
  }

  public decreaseProductCount(name: string): void {
    this.decreaseCount.emit(name);
  }

  public removeProduct(name: string): void {
    this.remove.emit(name);
  }
}