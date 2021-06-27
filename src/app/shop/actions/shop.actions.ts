import { createAction, props } from '@ngrx/store';
import { Shop } from '../models/shop';

export const createShopAction = createAction(
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
