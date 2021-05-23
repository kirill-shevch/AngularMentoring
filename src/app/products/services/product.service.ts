import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of([
      { name: 'Lamp', price: 10, available: true },
      { name: 'Sofa', price: 40, available: true },
      { name: 'Chair', price: 10, available: true },
      { name: 'Table', price: 80, available: false }
    ]);
  }
}
