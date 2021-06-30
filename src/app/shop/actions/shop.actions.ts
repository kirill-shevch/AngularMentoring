import { createAction, props } from '@ngrx/store';
import { Shop } from '../models/shop';

export const createShopAction = createAction(
  // Как-то не очень выглядит source [Actions]
  '[Actions] Y createShopAction'
);

export const createShopActionSuccess = createAction(
  '[Actions] Y createShopAction Success',
  props<{ payload: Shop }>()
);

export const createShopActionFailure = createAction(
  '[Actions] Y createShopAction Failure',
  props<{ error: any }>()
);

export const getShopsAction = createAction(
  '[Actions] Y getShopsAction'
);

export const getShopsActionSuccess = createAction(
  '[Actions] Y getShopsAction Success',
  props<{ shops: Shop[] }>()
);

export const getShopAction = createAction(
  '[Actions] Y getShopAction',
  props<{ id: number }>()
);

export const getShopActionSuccess = createAction(
  '[Actions] Y getShopAction Success',
  props<{ shop: Shop }>()
);
