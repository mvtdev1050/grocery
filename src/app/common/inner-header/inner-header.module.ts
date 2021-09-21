import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerHeaderRoutingModule } from './inner-header-routing.module';
import { InnerHeaderComponent } from './inner-header.component';


@NgModule({
  declarations: [InnerHeaderComponent],
  imports: [
    CommonModule,
    InnerHeaderRoutingModule
  ]
})
export class InnerHeaderModule { }
