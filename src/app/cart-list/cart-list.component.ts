import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductModel } from '../services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  productsInCart: Array<ProductModel> = [];

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProducts();
  }

  getCartSum(): number {
    return this.productsInCart.reduce((sum, current) => sum + current.price, 0);
  }
}
