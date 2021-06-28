import { Shop } from '../models/shop';

export interface ShopsState {
    data: ReadonlyArray<Shop>;
    selectedShop: Readonly<Shop> | null;
}

export const initialShopsState: ShopsState = {
    data: [],
    selectedShop: null
};
