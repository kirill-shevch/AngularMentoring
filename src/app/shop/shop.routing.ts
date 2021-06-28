import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: 'shop/:id',
    component: ShopComponent
  },
  {
    path: 'shop-list',
    component: ShopListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
