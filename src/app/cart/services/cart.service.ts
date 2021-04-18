import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Product[] = [];

  getProducts(): Array<Product> {
    return this.productsInCart;
  }

  addProduct(name: string, price: number): void {
    this.productsInCart.push({ name, price });
  }
}
