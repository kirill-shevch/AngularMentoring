import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return [
      { name: "Chair", price: 10 },
      { name: "Sofa", price: 40 }
    ];
  }
}
