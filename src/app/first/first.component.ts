import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() {
  }

  name = 'Market';
  description = 'A shop next door';
  price = 10;
  category: Category = Category.Drink;
  isAvailable = true;

  ngOnInit(): void {
  }

  getCategoryName(): string {
    return Category[this.category];
  }
}

enum Category {
  Food, Drink, Other
}
