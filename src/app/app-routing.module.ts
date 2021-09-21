import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './views/container/default-layout/default-layout.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { InnerHeaderComponent } from './common/inner-header/inner-header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ForgotPassComponent } from './views/forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './views/reset-pass/reset-pass.component';
import { StoresComponent } from './views/stores/stores.component';
import { MyAccountComponent } from './views/my-account/my-account.component';
import { EditAccountComponent } from './views/edit-account/edit-account.component';
import { MyPasswordComponent } from './views/my-password/my-password.component';
const routes: Routes = [
	
	{
		path: 'footer',
		component: FooterComponent
	},
	{
		path: 'header',
		component: HeaderComponent
	},
	{
		path: 'inner-header',
		component: InnerHeaderComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'sign-up',
		component: SignUpComponent
	},
	{
		path: 'forgot-pass',
		component: ForgotPassComponent
	},
	{
		path: 'reset-pass',
		component: ResetPassComponent
	},
	{
		path: 'stores',
		component: StoresComponent
	},
	{
		path: 'my-account',
		component: MyAccountComponent
	},
	{
		path: 'edit-account',
		component: EditAccountComponent
	},
	{
		path: 'my-password',
		component: MyPasswordComponent
	},
	{
		path: '',
		component: DefaultLayoutComponent,
		children: [
			// {
			// 	path: 'login',
			// 	loadChildren: () => LoginModule,
			// },
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
