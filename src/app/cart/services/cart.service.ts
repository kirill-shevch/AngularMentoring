import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: CartProduct[] = [];

  getProducts(): CartProduct[] {
    return this.productsInCart;
  }

  addProduct(name: string, price: number): void {
    const product = this.getProductByName(name);
    if (product) {
      product.count++;
    }
    else {
      this.productsInCart.push({ name, price, count: 1 });
    }
  }

  decreaseProductCount(name: string): void {
    const product = this.getProductByName(name);
    if (!product) {
      console.log(`${name} is not in the cart!`);
    }
    else if (product.count <= 1) {
      this.productsInCart = this.filterByProductName(name);
    }
    else {
      product.count--;
    }
  }

  removeProduct(name: string): void {
    const product = this.getProductByName(name);
    if (!product) {
      console.log(`${name} is not in the cart!`);
    }
    else {
      this.productsInCart = this.filterByProductName(name);
    }
  }

  private filterByProductName(name: string): CartProduct[] {
    return this.productsInCart.filter(({ name: cartProductName }) => cartProductName !== name);
  }

  isEmptyProduts(): boolean {
    return this.productsInCart.length > 0;
  }

  public getCartSum(): number {
    return this.productsInCart.reduce((sum, { price, count }) => sum + price * count, 0);
  }

  public getCartCount(): number {
    return this.productsInCart.reduce((sum, { count }) => sum + count, 0);
  }

  private getProductByName(name: string): CartProduct | undefined {
    return this.productsInCart.find(({ name: cartProductName }) => cartProductName === name);
  }
}
