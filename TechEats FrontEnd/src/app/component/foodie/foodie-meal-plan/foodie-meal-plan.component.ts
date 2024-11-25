import { Component, OnInit } from '@angular/core';
import { FoodieServiceService } from '../../../foodie-service.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-foodie-meal-plan',
  templateUrl: './foodie-meal-plan.component.html',
  styleUrl: './foodie-meal-plan.component.css',
})
export class FoodieMealPlanComponent implements OnInit{
  selectFormControl = new FormControl('', Validators.required);
  priceList: any;
  thali: number = 0;
 
  meal_plan: string = '';
  meal_type: string = '';
  discount: string = '';
  qunatity: number = 1;
  minDate: any;
  maxDate: any;
  selectionDate: any;
  constructor(
    private authServer: FoodieServiceService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.minDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.maxDate = datePipe.transform(new Date().setMonth(new Date().getMonth() + 1), 'yyyy-MM-dd');
    console.log('>>>>>>>>', this.minDate)
    
    // Sets the value to '' in case of an invalid date
  }

  ngOnInit(): void {
    const validate = (dateString: any) => {
      const day = (new Date(dateString)).getDay();
      if (day==0 || day==6) {
        return false;
      }
      return true;
    }
    const dateInput: any = document.querySelector('#dateitem');
    console.log('>>>>>>>>', dateInput);
    if (dateInput!== null) {
      dateInput.onchange = ((evt: any) => {
        if (!validate(evt.target.value)) {
          alert("Sorry, we are not available in the weekends!");
          evt.target.value = '';
        }
      });
    }



    this.authServer.getPriceList().pipe(take(1)).subscribe((res) => {
      console.log('>>>######>>>>', res)
      if (!!res) {
        this.priceList = res;
      }
    }, err => {
      console.log("Error while get price list");
    });

  }

  weekendsDatesFilter = (d: Date): boolean => {
    const day = d.getDay();

    /* Prevent Saturday and Sunday for select. */
    return day !== 0 && day !== 6 ;
}

  submit(): void {
    console.log('>>>>>>>>>>', this.selectionDate);
    let thaliName = 'VEG_THALI';
    console.log("****",this.thali.toString() === this.priceList['NON_VEG_THALI'].toString())
    if (this.thali.toString() === this.priceList['VEG_THALI'].toString()) {
      thaliName = 'VEG_THALI';
    } else if(this.thali.toString() === this.priceList['NON_VEG_THALI'].toString()) {
      thaliName = 'NON_VEG_THALI';
    } else if(this.thali.toString() === this.priceList['ALTERNATE'].toString()) {
      thaliName = 'ALTERNATE';
    }else if(this.thali.toString() === this.priceList['DISHDUO'].toString()) {
      thaliName = 'DISHDUO';
    }
    console.log("------->",thaliName);
    const days = this.discount === 'one_month' ? 25 : 5;
    const id = localStorage.getItem('token');
   
    this.authServer.placeOrderMeal(
        thaliName,
      this.meal_type.toUpperCase(),
      this.qunatity,
      days,
      this.meal_plan,
      id,
      this.selectionDate
    ).pipe(take(1)).subscribe((res: any) => {
      if (res && res?.orderId) {
        this.router.navigate(['/foodie/order-now'], { queryParams: { orderId: res?.orderId}});
      }
    });
  } 
}