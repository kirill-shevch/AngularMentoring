import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../../models/shop';
import { Store } from '@ngrx/store';
import { createShopAction } from '../../actions/shop.actions';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {

  shops!: Observable<Shop[]>;

  constructor(private store: Store) {
  }

  create(): void {
    this.store.dispatch(createShopAction());
  }

}
