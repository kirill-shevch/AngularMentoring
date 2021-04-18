import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<ProductModel> {
    return [
      { name: "Chair", price: 10 },
      { name: "Sofa", price: 40 }
    ];
  }
}

export class ProductModel {
  name: string = "";
  price: number = 0;
  constructor() {
  }
}
