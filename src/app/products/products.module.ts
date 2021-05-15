import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ProductComponent, ProductListComponent],
    exports: [ProductListComponent]
})
export class ProductsModule { }
