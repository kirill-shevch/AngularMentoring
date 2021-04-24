import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: Product[] = [];

  getProducts(): Product[] {
    return this.productsInCart;
  }

  addProduct(name: string, price: number): void {
    this.productsInCart.push({ name, price });
  }

  isEmptyProduts(): boolean {
    return this.productsInCart.length > 0;
  }

  public getCartSum(): number {
    return this.productsInCart.reduce((sum, { price }) => sum + price, 0);
  }
}
