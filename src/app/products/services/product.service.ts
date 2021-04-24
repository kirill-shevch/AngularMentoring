import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [
      { name: 'Chair', price: 10, available: true },
      { name: 'Sofa', price: 40, available: true },
      { name: 'Table', price: 80, available: false },
    ];
  }
}
