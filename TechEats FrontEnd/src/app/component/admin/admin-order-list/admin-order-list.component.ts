import { Component } from '@angular/core';
import { FoodieServiceService } from '../../../foodie-service.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrl: './admin-order-list.component.css'
})
export class AdminOrderListComponent {
  orderList: Array<any> = [];
  constructor(
    private service: FoodieServiceService
  ) {
    this.service.allOrderList().pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>>', res)
      if (res) {
        this.orderList = res;
      }
    });
  }
}
