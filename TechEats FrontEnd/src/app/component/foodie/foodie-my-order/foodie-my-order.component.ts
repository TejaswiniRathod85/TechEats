import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FoodieServiceService } from '../../../foodie-service.service';


@Component({
  selector: 'app-foodie-my-order',
  templateUrl: './foodie-my-order.component.html',
  styleUrl: './foodie-my-order.component.css'
})
export class FoodieMyOrderComponent implements OnInit{
  orderList: Array<any> = [];
  isTodayDate: boolean = false;
  constructor(
    private service: FoodieServiceService
  ) { }

  cancelOrder(orderId: any): void {
    this.deleteOrder(orderId);
    this.deleteOrderAndPayment(orderId);
  }

  ngOnInit(): void {
    this.getMyOrders();
  }

  getMyOrders(): void {
    const id = localStorage.getItem('token');
    this.service.allOrderListByUserId(id).pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>>', res)
      if (res) {
        let data: any = [];
        data = res.map((item: any) => {
          if (new Date(item?.orderedDate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)) {
            item.isTodayDate = true;
          } else {
            item.isTodayDate = false;
          }
          return item;
        });
        console.log('*********>>>>', data);
        this.orderList = data;
        console.log('%%%%%%', this.orderList);
      }
    });
  }

  deleteOrder(id: any): void {
    this.service.deleteOrderById(id).pipe(take(1)).subscribe((res) => {
      console.log('>>>>##>>>', res);
      alert('Your order cancel successfully');
      this.getMyOrders();
    });
  }

  deleteOrderAndPayment(orderId: any): void {
    this.service.deleteOrderAndPaymentById(orderId).pipe(take(1)).subscribe((res) => {
      console.log('>>>>##>>>', res);
      alert('Your order and payment were canceled successfully');
      this.getMyOrders();
    });
  }
}
