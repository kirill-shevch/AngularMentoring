import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './components/shop/shop.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { shopReducers } from './reducers/shop.reducers';
import { StoreModule } from '@ngrx/store';
import { ShopRoutingModule } from './shop.routing';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './services/shop.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('someAction', shopReducers),
    EffectsModule.forFeature([ShopEffects]),
  ],
  declarations: [ShopComponent, ShopListComponent],
  exports: [ShopRoutingModule]
})
export class ShopModule { }
