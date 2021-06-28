import { createReducer, on } from '@ngrx/store';
import { createShopAction, createShopActionSuccess, getShopAction, getShopActionSuccess, getShopsAction, getShopsActionSuccess } from '../actions/shop.actions';
import { initialShopsState } from '../states/shop-state';

export const shopReducers = createReducer(initialShopsState,
    on(getShopsAction, state => {
        return { ...state };
    }),
    on(getShopsActionSuccess, (state, { shops }) => {
        const data = [...shops];
        return { ...state, data };
    }),
    on(createShopAction, state => {
        return { ...state };
    }),
    on(createShopActionSuccess, (state, { payload }) => {
        console.log('createShopActionSuccess called!');
        const data = [...state.data, { ...payload }];
        const selectedShop = { ...payload };
        return { ...state, data, selectedShop };
    }),
    on(getShopAction, state => {
        console.log('getShopAction called!');
        return { ...state };
    }),
    on(getShopActionSuccess, (state, { shop }) => {
        console.log('getShopActionSuccess called!');
        const selectedShop = { ...shop };
        return {
            ...state,
            selectedShop
        };
    })
);
