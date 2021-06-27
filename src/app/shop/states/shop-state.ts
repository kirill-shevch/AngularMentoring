import { Shop } from '../models/shop';

export interface ShopsState {
    data: ReadonlyArray<Shop>;
}

export const initialShopsState: ShopsState = {
    data: []
};
