import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { createShopAction, getShopsAction } from '../../actions/shop.actions';
import { ShopsState } from '../../states/shop-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopsState!: Observable<ShopsState>;

  constructor(private store: Store,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log('We have a store! ', this.store);
    this.shopsState = this.store.select((state: any) => state.shops);
    this.store.dispatch(getShopsAction());
  }

  create(): void {
    this.store.dispatch(createShopAction());
  }

  open(id: number): void {
    const link = ['/shop', id];
    this.router.navigate(link);
  }

}
