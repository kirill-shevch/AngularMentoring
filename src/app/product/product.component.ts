import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  name: string = "";

  @Input()
  price: number = 0;

  onBuy(): void {
    console.log(`${this.name} bought! The price is ${this.price}`);
  }
}
