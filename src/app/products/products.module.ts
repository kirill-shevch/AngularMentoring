import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductSortComponent } from './components/product-sort/product-sort.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ProductComponent, ProductListComponent, ProductSortComponent],
    exports: [ProductListComponent]
})
export class ProductsModule { }
