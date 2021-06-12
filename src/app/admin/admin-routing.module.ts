import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    {
        path: 'admin/products',
        component: ProductsComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'add', component: AddProductComponent },
                    { path: 'edit', component: EditProductComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
