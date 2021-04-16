import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<ProductModel> {
    return [
      new ProductModel("Chair", 10),
      new ProductModel("Sofa", 40)
    ];
  }
}

class ProductModel {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
