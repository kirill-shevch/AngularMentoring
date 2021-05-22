import { Component } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent {

  productOptions: SortElement[] = [{ name: "name", checked: false }, { name: "price", checked: false }];

  sortByAscending: boolean = true;

  constructor() {
  }

  onProductOptionsChange(key: string, value: boolean) {
    this.productOptions.find(x => x.name === key)!.checked = value;
    console.log(this.productOptions);
  }

  onSortByAscendingChange(value: boolean): void {
    this.sortByAscending = value;
    console.log(this.sortByAscending);
  }

}

type SortElement = {
  name: string,
  checked: boolean
}
