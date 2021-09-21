import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ForgotPassComponent,
    SignUpComponent,
    ResetPassComponent,
    InnerHeaderComponent,
    StoresComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
