import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPasswordRoutingModule } from './my-password-routing.module';
import { MyPasswordComponent } from './my-password.component';


@NgModule({
  declarations: [MyPasswordComponent],
  imports: [
    CommonModule,
    MyPasswordRoutingModule
  ]
})
export class MyPasswordModule { }
