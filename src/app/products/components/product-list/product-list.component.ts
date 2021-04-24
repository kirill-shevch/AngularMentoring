import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService) {
    this.products = this.getProducts();
  }

  buy({ name, price }: Product): void {
    console.log(`${name} bought! The price is ${price}`);
    this.cartService.addProduct(name, price);
  }

  private getProducts(): Product[] {
    return this.productService.getProducts();
  }
}
