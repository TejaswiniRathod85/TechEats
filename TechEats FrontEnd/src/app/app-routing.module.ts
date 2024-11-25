import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { FoodieHomeComponent } from './component/foodie/foodie-home/foodie-home.component';
import { AdminHomeChefListComponent } from './component/admin/admin-home-chef-list/admin-home-chef-list.component';
import { AdminOrderListComponent } from './component/admin/admin-order-list/admin-order-list.component';
import { FoodieHomeChefComponent } from './component/foodie/foodie-home-chef/foodie-home-chef.component';
import { FoodieMealPlanComponent } from './component/foodie/foodie-meal-plan/foodie-meal-plan.component';
import { FoodieOrderNowComponent } from './component/foodie/foodie-order-now/foodie-order-now.component';
import { FoodieMyOrderComponent } from './component/foodie/foodie-my-order/foodie-my-order.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'home-chef',component:FoodieHomeComponent},
  {path:'meal-plan',component:FoodieMealPlanComponent},
  {path:'order-now',component:FoodieOrderNowComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'terms-and-conditions',component:TermsAndConditionsComponent},

  {path:'admin',children:[
    {path:'home',component:AdminHomeComponent},
    {path:'home-chef-list',component:AdminHomeChefListComponent},
    {path:'order-list',component:AdminOrderListComponent},
  ]},

{path:'foodie',children:[
  {path:'home',component:FoodieHomeComponent},
  {path:'home-chef',component:FoodieHomeChefComponent},
  {path:'meal-plan',component:FoodieMealPlanComponent},
  {path:'order-now',component:FoodieOrderNowComponent},
  {path:'my-order',component:FoodieMyOrderComponent},
 ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
