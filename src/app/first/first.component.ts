import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getCategoryName(): string {
    return Category[this.category];
  }

  name: string = "Market";
  description: string = "A shop next door";
  price: number = 10;
  category: Category = Category.Drink;
  isAvailable: boolean = true;
}

enum Category {
  Food, Drink, Other
}
