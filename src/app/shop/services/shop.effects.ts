import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { createShopAction, createShopActionSuccess } from '../actions/shop.actions';
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


    private generateRandomShop(): Shop {
        return {
            id: Math.floor(Math.random() * 10000),
            name: Math.random().toString(36).substring(7),
            adress: Math.random().toString(36).substring(7)
        };
    }

}
