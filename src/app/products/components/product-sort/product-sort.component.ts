import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent {

  productOptions: SortElement[] = [{ name: "name", checked: false }, { name: "price", checked: false }];

  sortByAscending: boolean = true;

  @Output()
  sortByAscendingChanged: EventEmitter<boolean> = new EventEmitter();

  @Output()
  productOptionsChanged: EventEmitter<string[]> = new EventEmitter();

  constructor() {
  }

  onProductOptionsChange(key: string, value: boolean) {
    this.productOptions.find(x => x.name === key)!.checked = value;
    const result: string[] = [];
    this.productOptions.forEach(element => {
      if (element.checked) {
        result.push(element.name);
      }
    });
    this.productOptionsChanged.emit(result);
  }

  onSortByAscendingChange(value: boolean): void {
    this.sortByAscending = value;
    this.sortByAscendingChanged.emit(value);
  }

}

type SortElement = {
  name: string,
  checked: boolean
}
