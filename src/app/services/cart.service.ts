import { Injectable } from '@angular/core';
import { ProductModel } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsInCart: Array<ProductModel> = [];

  getProducts(): Array<ProductModel> {
    return this.productsInCart;
  }

  addProduct(name: string, price: number): void {
    this.productsInCart.push({ name: name, price: price });
  }

  constructor() { }
}
