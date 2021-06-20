import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../../models/cartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cartProduct: CartProduct = { id: 0, name: 'default', price: 0, count: 1 };

  @Output()
  add = new EventEmitter<any>();

  @Output()
  decreaseCount = new EventEmitter<number>();

  @Output()
  remove = new EventEmitter<number>();

  public addProduct(id: number, name: string, price: number): void {
    this.add.emit({ id, name, price });
  }

  public decreaseProductCount(id: number): void {
    this.decreaseCount.emit(id);
  }

  public removeProduct(id: number): void {
    this.remove.emit(id);
  }
}
