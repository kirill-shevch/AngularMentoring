import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartPromiseService {

  private productUrl = 'http://localhost:3000/cart';

  private productsInCart: BehaviorSubject<CartProduct[]> = new BehaviorSubject([] as CartProduct[]);

  constructor(private http: HttpClient) {
    this.pullProducts().then(products => { this.productsInCart.next(products); });
  }

  public getProducts(): Observable<CartProduct[]> {
    return this.productsInCart.asObservable();
  }

  public addProduct(id: number, name: string, price: number): void {
    const product = this.productsInCart.value.find(({ id: cartProductId }) => cartProductId === id);
    if (product) {
      product.count++;
      this.updateCartProduct(product);
    }
    else {
      this.createCartProduct({ id, name, price, count: 1 });
    }
    this.pullProducts().then(products => { this.productsInCart.next(products); });
  }

  public decreaseProductCount(id: number): void {
    const product = this.productsInCart.value.find(({ id: cartProductId }) => cartProductId === id);
    if (!product) {
      console.log(`${id} is not in the cart!`);
    }
    else if (product.count <= 1) {
      this.deleteCartProduct(product);
    }
    else {
      product.count--;
      this.updateCartProduct(product);
    }
    this.pullProducts().then(products => { this.productsInCart.next(products); });
  }

  public removeProduct(id: number): void {
    const product = this.productsInCart.value.find(({ id: cartProductId }) => cartProductId === id);
    if (!product) {
      console.log(`Product with ID:${id} is not in the cart!`);
    }
    else {
      this.deleteCartProduct(product);
    }
    this.pullProducts().then(products => { this.productsInCart.next(products); });
  }

  public isEmptyProduts(): boolean {
    return this.productsInCart.getValue().length > 0;
  }

  public getCartSum(): number {
    return this.productsInCart.getValue().reduce((sum, { price, count }) => sum + price * count, 0);
  }

  public getCartCount(): number {
    return this.productsInCart.getValue().reduce((sum, { count }) => sum + count, 0);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  public pullProducts(): Promise<CartProduct[]> {
    return this.http
      .get(this.productUrl)
      .toPromise()
      .then(response => response as CartProduct[])
      .catch(this.handleError);
  }

  getCartProduct(id: number): Promise<CartProduct> {
    const url = `${this.productUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as CartProduct)
      .catch(this.handleError);
  }

  updateCartProduct(cartProduct: CartProduct): Promise<CartProduct> {
    const url = `${this.productUrl}/${cartProduct.id}`;
    const body = JSON.stringify(cartProduct);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as CartProduct)
      .catch(this.handleError);
  }

  createCartProduct(cartProduct: CartProduct): Promise<CartProduct> {
    const url = this.productUrl;
    const body = JSON.stringify(cartProduct);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as CartProduct)
      .catch(this.handleError);
  }

  deleteCartProduct(cartProduct: CartProduct): Promise<CartProduct> {
    const url = `${this.productUrl}/${cartProduct.id}`;
    return (
      this.http
        .delete(url)
        .toPromise()
        .catch(this.handleError)
    );
  }
}
