import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  name = '';

  @Input()
  price = 0;

  @Input()
  available = false;

  constructor(private cartService: CartService) { }

  onBuy(): void {
    console.log(`${this.name} bought! The price is ${this.price}`);
    this.cartService.addProduct(this.name, this.price);
  }
}
