import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: BehaviorSubject<CartProduct[]> = new BehaviorSubject([] as CartProduct[]);

  public get productsInCartState(): CartProduct[] {
    return this.productsInCart.getValue();
  }

  public getProducts(): Observable<CartProduct[]> {
    return this.productsInCart.asObservable();
  }

  public addProduct(id: number, name: string, price: number): void {
    const product = this.getProductByName(name);
    if (product) {
      product.count++;
    }
    else {
      const nextStateProductCart = [...this.productsInCartState, { id, name, price, count: 1 }];
      this.productsInCart.next(nextStateProductCart);
    }
  }

  public decreaseProductCount(name: string): void {
    const product = this.getProductByName(name);
    if (!product) {
      console.log(`${name} is not in the cart!`);
    }
    else if (product.count <= 1) {
      this.productsInCart.next(this.filterByProductName(name));
    }
    else {
      product.count--;
    }
  }

  public removeProduct(name: string): void {
    const product = this.getProductByName(name);
    if (!product) {
      console.log(`${name} is not in the cart!`);
    }
    else {
      this.productsInCart.next(this.filterByProductName(name));
    }
  }

  public isEmptyProduts(): boolean {
    return this.productsInCartState.length > 0;
  }

  public getCartSum(): number {
    return this.productsInCartState.reduce((sum, { price, count }) => sum + price * count, 0);
  }

  public getCartCount(): number {
    return this.productsInCartState.reduce((sum, { count }) => sum + count, 0);
  }

  private filterByProductName(name: string): CartProduct[] {
    return this.productsInCartState.filter(({ name: cartProductName }) => cartProductName !== name);
  }

  private getProductByName(name: string): CartProduct | undefined {
    return this.productsInCartState.find(({ name: cartProductName }) => cartProductName === name);
  }
}
