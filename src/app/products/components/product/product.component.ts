import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  name: string = "";

  @Input()
  price: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onBuy(): void {
    console.log(`${this.name} bought! The price is ${this.price}`);
    this.cartService.addProduct(this.name, this.price);
  }
}
