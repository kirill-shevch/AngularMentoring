import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import { go } from '../actions/router.actions';
import { createShopAction, createShopActionSuccess, getShopAction, getShopActionSuccess, getShopsAction, getShopsActionSuccess } from '../actions/shop.actions';
import { Shop } from '../models/shop';
import { ShopService } from './shop.service';

@Injectable({
    providedIn: 'root'
})
export class ShopEffects {

    constructor(private shopService: ShopService,
                private actions: Actions) {
    }

    createShop = createEffect(
        () => this.actions.pipe(
            ofType(createShopAction),
            switchMap(() => this.shopService.createShop(this.generateRandomShop())),
            switchMap(async (shop) => createShopActionSuccess({ payload: shop })))
    );

    createShopSuccess = createEffect(
        () => this.actions.pipe(
            ofType(createShopActionSuccess),
            map(action => go({ path: [`shop`], queryParams: [1] }))
        )
    );

    getShops = createEffect(
        () => this.actions.pipe(
            ofType(getShopsAction),
            switchMap(() => this.shopService.getShops()),
            switchMap(async (shops) => getShopsActionSuccess({ shops }))
        )
    );

    getShop = createEffect(
        () => this.actions.pipe(
            ofType(getShopAction),
            pluck('id'),
            switchMap(id => this.shopService.getShop(id)),
            switchMap(async (shop) => getShopActionSuccess({ shop }))
        )
    );

    private generateRandomShop(): Shop {
        return {
            id: Math.floor(Math.random() * 10000),
            name: Math.random().toString(36).substring(7),
            adress: Math.random().toString(36).substring(7)
        };
    }
}
