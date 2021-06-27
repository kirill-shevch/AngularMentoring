import { createReducer, on } from '@ngrx/store';
import { createShopAction, createShopActionSuccess } from '../actions/shop.actions';

export const shopReducers = createReducer(null,
    on(createShopAction, () => {
        return null;
    }),
    on(createShopActionSuccess, (object) => {
        console.log(object);
        return null;
    })
);
