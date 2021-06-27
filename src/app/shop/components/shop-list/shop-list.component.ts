import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { createShopAction, getShopsAction } from '../../actions/shop.actions';
import { ShopsState } from '../../states/shop-state';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopsState!: Observable<ShopsState>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    console.log('We have a store! ', this.store);
    this.shopsState = this.store.select((state: any) => state.shops);
    this.store.dispatch(getShopsAction());
  }

  create(): void {
    this.store.dispatch(createShopAction());
  }

}
