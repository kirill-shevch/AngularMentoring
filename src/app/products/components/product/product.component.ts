import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product!: Product;

  constructor(private cartService: CartService) { }

  onBuy(): void {
    console.log(`${this.product.name} bought! The price is ${this.product.price}`);
    this.cartService.addProduct(this.product.name, this.product.price);
  }
}
