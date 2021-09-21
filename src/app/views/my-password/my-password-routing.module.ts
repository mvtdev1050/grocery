import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPasswordComponent} from './my-password.component';

const routes: Routes = [{
	path : '',
	component: MyPasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPasswordRoutingModule { }
