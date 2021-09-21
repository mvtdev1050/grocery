import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPassComponent } from './reset-pass.component';

const routes: Routes = [{
	path: '',
	component: ResetPassComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPassRoutingModule { }
