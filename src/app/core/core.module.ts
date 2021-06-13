import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FirstComponent,
    CartRoutingModule
  ],
  declarations: [FirstComponent, LoginComponent]
})
export class CoreModule { }
