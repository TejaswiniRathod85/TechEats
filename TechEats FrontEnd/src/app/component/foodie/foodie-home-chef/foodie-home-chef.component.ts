import { Component } from '@angular/core';
import { take } from 'rxjs';
import { FoodieServiceService } from '../../../foodie-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodie-home-chef',
  templateUrl: './foodie-home-chef.component.html',
  styleUrl: './foodie-home-chef.component.css'
})
export class FoodieHomeChefComponent {
  name: string = "";
  emailId: string = "";
  password: string = "";
  phoneNum: string = "";
  specializedIn: string = "";
  location: string = "";
  errorMessage: string='';
  constructor(
    
    private router: Router,
    private fService: FoodieServiceService

  ) { }

  ngOnInit(): void {
  }

  gotoTermsAndCondition():void{
    this.router.navigate(['/terms-and-conditions']);
  }

  homeChefSignUp(): void {
    if (this.name === '' || this.name.length < 3) {
      this.errorMessage="Name must contain atleast 3 characters";
      // alert('FirstName must contain atleast 3 characters');
      return;
    }

    if (this.phoneNum === '' || this.phoneNum.length < 10 || this.phoneNum.length > 10) {
      this.errorMessage="Phone must contain atleast 10 characters";
      // alert('Phone must contain atleast 10 characters');
      return;
    }
    const pattern=/^[6789][0-9]{9}$/;
    if (!pattern.test(this.phoneNum)) {
      this.errorMessage="Invalid mobile number.";
      // alert('Invalid mobile number.');
      return;
    }

    const body: any = {
      name : this.name,
      phoneNum : this.phoneNum,
      location: this.location,
      emailId :this.emailId,
      password:this.password,
      specializedIn: this.specializedIn,
     
    }
    console.log("=======>",body);

    this.fService.homeChefSignUp(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.homeChefId){
        alert("Dear "+this.name+", Thank you for registering with us as a home chef. We sincerely appreciate your decision to join our vibrant Folksy community. Rest assured, we will promptly get back to you!");
        // this.router.navigate(["/login"]);
      }
    }, err =>{
        console.log("Error  ", err);
        if (err && err?.error === 'Oops duplicate Entry of the data !') {
          alert("Email address registered already, please go to login.");
        } else {
          alert("Something going wrong..pls try again");
        }
    })

  }
}
