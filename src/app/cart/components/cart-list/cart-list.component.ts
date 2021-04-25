import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { CartProduct } from '../../models/cartProduct';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  public productsInCart: Observable<CartProduct[]> = of([] as CartProduct[]);

  public get isEmptyProduts(): boolean {
    return this.cartService.isEmptyProduts();
  }

  public getCartSum(): number {
    return this.cartService.getCartSum();
  }

  public getCartCount(): number {
    return this.cartService.getCartCount();
  }

  public addProduct(product: any): void {
    this.cartService.addProduct(product.name, product.price);
  }

  public decreaseProductCount(name: string): void {
    this.cartService.decreaseProductCount(name);
  }

  public removeProduct(name: string): void {
    this.cartService.removeProduct(name);
  }

  constructor(private cartService: CartService) {
    this.productsInCart = this.cartService.getProducts();
  }
}
