import { Component } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  productsInCart: Product[] = [];


  public get isEmptyProduts(): boolean {
    return this.productsInCart.length > 0;
  }

  public getCartSum(): number {
    return this.productsInCart.reduce((sum, { price }) => sum + price, 0);
  }

  constructor(private cartService: CartService) {
    this.productsInCart = this.cartService.getProducts();
  }
}
