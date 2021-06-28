import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getShopAction } from '../../actions/shop.actions';
import { selectShopsState } from '../../selectors/shop.selectors';
import { ShopsState } from '../../states/shop-state';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopsState!: Observable<ShopsState>;

  constructor(private store: Store,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('we are in shop component!');
    console.log('We have a store! ', this.store);
    this.shopsState = this.store.select(selectShopsState);
    this.route.params.subscribe(params => this.store.dispatch(getShopAction({ id: +params.id })));
  }

}
