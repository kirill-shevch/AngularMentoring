import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product';
import { ProductPromiseService } from '../../services/product-promise.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Promise<Product[]>;

  sortByAscending = true;

  sortByProperties: string[] = [];

  constructor(
    private productService: ProductPromiseService,
    private cartService: CartService) {
    this.products = this.getProducts();
  }

  buy({ name, price }: Product): void {
    console.log(`${name} bought! The price is ${price}`);
    this.cartService.addProduct(name, price);
  }

  sortByAscendingChanged(value: boolean): void {
    this.sortByAscending = value;
    console.log('!!!');
  }

  sortByPropertiesChanged(properties: string[]): void {
    this.sortByProperties = properties;
  }

  private getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }
}
