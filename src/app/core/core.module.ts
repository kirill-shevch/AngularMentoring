import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { EmailDirective } from './directives/email.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FirstComponent,
    CartRoutingModule,
    EmailDirective
  ],
  declarations: [FirstComponent, LoginComponent, ProcessOrderComponent, EmailDirective]
})
export class CoreModule { }
