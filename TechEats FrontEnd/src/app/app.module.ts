import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { FoodieHomeComponent } from './component/foodie/foodie-home/foodie-home.component';
import { FoodieHeaderComponent } from './component/foodie/foodie-header/foodie-header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminOrderListComponent } from './component/admin/admin-order-list/admin-order-list.component';
import { AdminHomeChefListComponent } from './component/admin/admin-home-chef-list/admin-home-chef-list.component';
import { FoodieMealPlanComponent } from './component/foodie/foodie-meal-plan/foodie-meal-plan.component';
import { FoodieOrderNowComponent } from './component/foodie/foodie-order-now/foodie-order-now.component';
import { FoodieHomeChefComponent } from './component/foodie/foodie-home-chef/foodie-home-chef.component';
import { FoodieMyOrderComponent } from './component/foodie/foodie-my-order/foodie-my-order.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    AppHeaderComponent,
    LoginComponent,
    SignUpComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    FoodieHomeComponent,
    FoodieHeaderComponent,
    AdminOrderListComponent,
    AdminHomeChefListComponent,
    FoodieMealPlanComponent,
    FoodieOrderNowComponent,
    FoodieHomeChefComponent,
    FoodieMyOrderComponent,
    ForgotPasswordComponent,
    TermsAndConditionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideClientHydration(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
