import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProducts(): Array<string> {
    return this.productService.getProducts().map(item => `Product name: ${item.name}, Product price: ${item.price}`);
  }
}
