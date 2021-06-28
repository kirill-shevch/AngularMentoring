import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { back, forward, go } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) { }

    navigate$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(go),
                tap(action => {
                    const { type: deleted, path, queryParams, extras } = { ...action };
                    this.router.navigate(path, { queryParams, ...extras });
                })
            ),
        { dispatch: false }
    );
}