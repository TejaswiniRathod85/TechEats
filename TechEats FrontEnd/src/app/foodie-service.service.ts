import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodieServiceService {
  url: string = 'http://localhost:8080';
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  /* Client Registeration */
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/users/register", body);
  }
  /* HomeChef Registration */
  homeChefSignUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/homechef/homechef/register", body);
  }
  //client login
  userSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/users/login", body);
  }
  //once we logged in that time we are storing client id into token 
  storeUserAuthorization(token: string): void {
    localStorage.setItem("token", token);
  }

  getUserAuthorization(): any {
    const token = localStorage.getItem("token");
    return token;
  }

  storeUserName(name: string): void {
    localStorage.setItem("userName", name);
  }

  getUserName(): any {
    const name = localStorage.getItem("userName");
    return name;
  }

  foodieLogout(): void {
    localStorage.clear();
    this.route.navigate(['']);
  }
  //admin login
  adminSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/admin/login", body);
  }
  storeAdminAuthorization(token: string): void {
    localStorage.setItem("admin", token);
  }
  getAdminAuthorization(): any {
    const token = localStorage.getItem("admin");
    return token;
  }

  storeAdminUserName(name: string): void {
    localStorage.setItem("adminName", name);
  }

  getAdminName(): any {
    const name = localStorage.getItem("adminName");
    return name;
  }

  adminLogout(): void {
    localStorage.clear();
    this.route.navigate(['/']);
  }

  // this is to get username in admin.home.html part via admin.home.ts
  isAdminLoginPresent(): void {
    if (this.getAdminAuthorization() === null) {
      this.route.navigate(['/admin-login']);
    }
  }

  isUserLoginPresent(): void {
    if (this.getUserAuthorization() === null) {
      this.route.navigate(['/foodie-login']); ///user-login
    }
  }
  storeUserRole(role: string): void {
    localStorage.setItem("role", role);
  }

  getUserRole(): any {
    const role = localStorage.getItem("role");
    return role;
  }

  forgotPassword(body: any):Observable<any> {
    return this.http.post(this.url + "/api/users/forgotpassword", body);
  }
  
  // updateUserInformation(body: any):Observable<any> {
  //   return this.http.put(this.url + "/api/users/user/"+body?.userId, body);
  // }
  
  changePassword(uid: any,password:any):Observable<any> {
    return this.http.post(this.url + "/api/users/"+uid+"/"+password,{});
  }

  getPriceList(): Observable<any> {
    return this.http.get(this.url+"/pricelist");
  }

  placeOrder(body: any, uid: any): Observable<any> {
    return this.http.post(this.url + "/api/orders/addOrder/"+ uid, body);
  }

  allOrderList(): Observable<any> {
    return this.http.get(this.url+"/api/orders/allOrder");
  }

  allOrderListByUserId(uid: any): Observable<any> {
    return this.http.get(this.url+"/api/orders/allOrderByUserId/"+uid);
  }

  deleteOrderById(orderId: any): Observable<any> {
    return this.http.delete(this.url+"/api/orders/deleteOrder/"+orderId);
  }

  placeOrderMeal(mealCategory: any, mealType: any, quantity: any, numberOfDays: any, lunchOrDinnerOrBoth: any, userId: any, selectionDate: any): Observable<any> {
    return this.http.post(this.url + `/api/orders/orderMeal?mealCategory=${mealCategory}&mealType=${mealType}&quantity=${quantity}&numberOfDays=${numberOfDays}&lunchOrDinnerOrBoth=${lunchOrDinnerOrBoth}&userId=${userId}&selectionDate=${selectionDate}`, {});
  }

  addPayment(body:any,orderid:any,userId:any):Observable<any> {
    return this.http.post(this.url + "/api/payements/"+orderid+"/"+userId, body);
  }
  orderTransactionDetail(grandTotal:any):Observable<any>{
    return this.http.get(this.url+"/api/orders/createTransaction/"+grandTotal);
  }
  getOrderById(id:any):Observable<any>{
    return this.http.get(this.url+"/api/orders/order/"+id);
  }

 //delete order and payment
 deleteOrderAndPaymentById(orderId: any): Observable<any> {
  return this.http.delete(this.url + "/api/payements/deleteOrderAndPayment/" + orderId);
}

  allHomeChefList(): Observable<any> {
    return this.http.get(this.url+"/api/homechef");
  }
}