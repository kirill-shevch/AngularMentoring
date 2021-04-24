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
    return this.cartService.isEmptyProduts();
  }

  public getCartSum(): number {
    return this.cartService.getCartSum();
  }

  constructor(private cartService: CartService) {
    this.productsInCart = this.cartService.getProducts();
  }
}
