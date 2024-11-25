import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { FoodieServiceService } from '../../../foodie-service.service';
declare var Razorpay: any;
@Component({
  selector: 'app-foodie-order-now',
  templateUrl: './foodie-order-now.component.html',
  styleUrl: './foodie-order-now.component.css'
})
export class FoodieOrderNowComponent {
  discount: number = 0;
  duration: string = '';
  gst: number = 0;
  meal_Price: number = 0;
  meal_plan: string = '';
  meal_type: string = '';
  quantity: number = 0;
  tax: number = 0;
  grandTotal: number = 0;
  deliveryCharge: number = 0;
  mealTypePrice: number = 0;
  days: number = 0;
  mealCategory: string= '';
  orderId:any='';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: FoodieServiceService,
    private router: Router
  ) {
    activatedRoute.queryParams.subscribe((res: any) => {
      console.log('>>>>', res);
      if (res) {
        if (res?.orderId) {
          this.orderId = res?.orderId;
          this.service.getOrderById(res?.orderId).subscribe((resp: any) => {
            console.log('>>>>>', resp);
            if (resp?.meal_Price) {
              this.meal_Price = resp?.meal_Price;
            }
            if (resp?.meal_plan) {
              this.meal_plan = resp?.meal_plan;
            }
            if (resp?.quantity) {
              this.quantity = resp?.quantity;
            }
            if (resp?.meal_type) {
              this.meal_type = resp?.meal_type;
            }
            if (resp?.duration) {
              this.duration = resp?.duration;
            }
            if (resp?.tax) {
              this.tax = resp?.tax;
            }
            if (resp?.grandTotal) {
              this.grandTotal = resp?.grandTotal;
            }
          })
        }
      }
    });
  }
orderTransactionDetails():void{
  this.service.orderTransactionDetail(this.grandTotal).pipe(take(1)).subscribe((res:any)=>{
    console.log("&&&&&&&&&&&&&&",res);
    this.openTransactionModel(res);
  })
}
  addPayment(): void {
   
    const id = localStorage.getItem('token');
    this.orderTransactionDetails();
  }

  openTransactionModel(response: any) {
    var options = {
      order_id: response.orderId,
      key: response.key,
      amount: response.amount,
      currency: response.currency,
      name: 'TechEats',
      description: 'Payment - TechEats',
      image: 'https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415_640.jpg',
      handler: (response: any) => {
        console.log('####', response);
        if(response!= null && response.razorpay_payment_id != null) {
          this.processResponse(response);
        } else {
          alert("Payment failed..")
        }
       
      },
      prefill : {
        name:'FOF',
        email: 'FOF@GMAIL.COM',
        contact: '7447842713'
      },
      notes: {
        address: 'TechEats'
      },
      theme: {
        color: '#F37254'
      }
    };

    var razorPayObject = new Razorpay(options);
    razorPayObject.open();
  }

  processResponse(resp: any) {
    
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>',resp);
    if (resp && resp?.razorpay_order_id && resp?.razorpay_payment_id ) {
      console.log("*****");
      const body:any={
        totalPrice:this.grandTotal,
        orderId:this.orderId,
      
    PaidDate:new Date(),
         paidAmount:this.grandTotal
      };
      const uid = localStorage.getItem('token');
      this.service.addPayment(body,this.orderId,uid).pipe(take(1)).subscribe((res)=>{
        console.log("%%%%%%%",res);
        if(res){
          alert("payment sucessful");
          this.router.navigate(['/foodie/my-order']);
        }
      });

    }
  }
}
