import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartPromiseService {

  private productUrl = 'http://localhost:3000/cart';

  private productsInCart: BehaviorSubject<CartProduct[]> = new BehaviorSubject([] as CartProduct[]);

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<CartProduct[]> {
    return this.productsInCart.asObservable();
  }

  public addProduct(name: string, price: number): void {
    this.getCartProduct(name)
      .then(item => {
        if (item) {
          item.count++;
          this.updateCartProduct(item);
        }
        else {
          this.createCartProduct({ name, price, count: 1 });
        }
      });
    this.pullProducts().then(products => { this.productsInCart.next(products); });
  }

  public decreaseProductCount(name: string): void {
    this.getCartProduct(name)
      .then(item => {
        if (!item) {
          console.log(`${name} is not in the cart!`);
        }
        else if (item.count <= 1) {
          this.deleteCartProduct(item);
        }
        else {
          item.count--;
        }
      });
    this.pullProducts().then(products => { this.productsInCart.next(products); });
  }

  public removeProduct(name: string): void {
    this.getCartProduct(name)
      .then(item => {
        if (!item) {
          console.log(`${name} is not in the cart!`);
        }
        else {
          this.deleteCartProduct(item);
        }
      });
    this.pullProducts().then(products => { this.productsInCart.next(products); });
  }

  public isEmptyProduts(): Promise<boolean> {
    return this.pullProducts().then(array => array.length > 0);
  }

  public getCartSum(): Promise<number> {
    return this.pullProducts().then(array => array.reduce((sum, { price, count }) => sum + price * count, 0));
  }

  public getCartCount(): Promise<number> {
    return this.pullProducts().then(array => array.reduce((sum, { count }) => sum + count, 0));
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

  getCartProduct(name: string): Promise<CartProduct> {
    const url = `${this.productUrl}/${name}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as CartProduct)
      .catch(this.handleError);
  }

  updateCartProduct(cartProduct: CartProduct): Promise<CartProduct> {
    const url = `${this.productUrl}/${cartProduct.name}`;
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
    const url = `${this.productUrl}/${cartProduct.name}`;
    return (
      this.http
        .delete(url)
        .toPromise()
        .catch(this.handleError)
    );
  }
}
