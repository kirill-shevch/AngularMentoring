import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cartService: CartService,
    private router: Router) { }

  onBuy(): void {
    console.log(`${this.product.name} bought! The price is ${this.product.price}`);
    this.cartService.addProduct(this.product.name, this.product.price);
  }

  onOpen(): void {
    const link = ['/products/open', this.product.name];
    this.router.navigate(link);
  }
}
