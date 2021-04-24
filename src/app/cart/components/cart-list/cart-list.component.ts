import { Component } from '@angular/core';
import { CartProduct } from '../../models/cartProduct';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  productsInCart: CartProduct[] = [];


  public get isEmptyProduts(): boolean {
    return this.cartService.isEmptyProduts();
  }

  public getCartSum(): number {
    return this.cartService.getCartSum();
  }

  public getCartCount(): number {
    return this.cartService.getCartCount();
  }

  constructor(private cartService: CartService) {
    this.productsInCart = this.cartService.getProducts();
  }
}
