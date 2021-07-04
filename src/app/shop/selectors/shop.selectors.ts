import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Shop } from '../models/shop';
import { ShopsState } from '../states/shop-state';
import { selectRouterState } from './router.selectors';

export const selectShopsState = createFeatureSelector<ShopsState>('shops');

export const selectShopsData = createSelector(selectShopsState, (state: ShopsState) => state.data);
export const selectSelectedTask = createSelector(selectShopsState, (state: ShopsState) => state.selectedShop);

export const selectSelectedShopByUrl = createSelector(
    selectShopsData,
    selectRouterState,
    (shops, router): Shop => {
        const id = router.state.params.id;
        if (id && Array.isArray(shops)) {
            const shop = shops.find(sh => sh.id === +id);
            if (!shop) {
                return { id: 0, name: '', adress: '' } as Shop;
            }
            else {
                return shop;
            }
        } else {
            return { id: 0, name: '', adress: '' } as Shop;
        }
    }
);
