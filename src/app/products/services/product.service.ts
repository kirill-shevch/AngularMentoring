import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Lamp', price: 10, available: true },
      { id: 2, name: 'Sofa', price: 40, available: true },
      { id: 3, name: 'Chair', price: 10, available: true },
      { id: 4, name: 'Table', price: 80, available: false }
    ]);
  }
}
