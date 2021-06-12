import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent, AddProductComponent, EditProductComponent],
  exports: [AdminRoutingModule, ProductsComponent, AddProductComponent, EditProductComponent]
})
export class AdminModule { }
