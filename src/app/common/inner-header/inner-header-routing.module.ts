import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerHeaderComponent } from './inner-header.component';

const routes: Routes = [{
	path: '',
	component: InnerHeaderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerHeaderRoutingModule { }
