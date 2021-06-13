import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLayoutComponent } from './components/product-layout/product-layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'products/open/:productName',
    component: ProductLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
