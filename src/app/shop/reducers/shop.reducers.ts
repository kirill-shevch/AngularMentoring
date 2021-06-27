import { createReducer, on } from '@ngrx/store';
import { createShopAction, createShopActionSuccess, getShopsAction, getShopsActionSuccess } from '../actions/shop.actions';
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
        console.log(state);
        const data = [...state.data, { ...payload }];
        return { ...state, data };
    })
);
