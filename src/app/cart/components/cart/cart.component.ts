import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from '../../models/cartProduct';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cartProduct: CartProduct = { name: 'default', price: 0, count: 1 };

  @Output()
  updateProductsEvent = new EventEmitter();

  constructor(private cartService: CartService) { }

  public addProduct(name: string, price: number): void {
    this.cartService.addProduct(name, price);
    this.updateProductsEvent.emit();
  }

  public decreaseProductCount(name: string): void {
    this.cartService.decreaseProductCount(name);
    this.updateProductsEvent.emit();
  }

  public removeProduct(name: string): void {
    this.cartService.removeProduct(name);
    this.updateProductsEvent.emit();
  }
}
