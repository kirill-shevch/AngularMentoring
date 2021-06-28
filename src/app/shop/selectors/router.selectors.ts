import { createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../states/router.state';

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');