
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { FoodieServiceService } from '../../foodie-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  fullName: string = "";
  email: string = "";
  password: string = "";
  phone: string = "";
  address: string = "";
  city: string = "";
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

  signup(): void {
    if (this.fullName === '' || this.fullName.length < 3) {
      this.errorMessage="FullName must contain atleast 3 characters";
      // alert('FirstName must contain atleast 3 characters');
      return;
    }

    const re = /\S+@\S+\.\S+/;
   if(!re.test(this.email)){
    this.errorMessage="Email addresss not valid";
    return;
   }

    if (this.phone === '' || this.phone.length < 10 || this.phone.length > 10) {
      this.errorMessage="Phone must contain atleast 10 characters";
      // alert('Phone must contain atleast 10 characters');
      return;
    }
    const pattern=/^[6789][0-9]{9}$/;
    if (!pattern.test(this.phone)) {
      this.errorMessage="Invalid mobile number.";
      // alert('Invalid mobile number.');
      return;
    }

    if(this.password==="" || this.password===undefined ){
      this.errorMessage="Password is blank";
      return;
    }

    if(this.address==="" || this.address===undefined ){
      this.errorMessage="Address is blank";
      return;
    }

    if(this.city==="" || this.city===undefined ){
      this.errorMessage="Select any Location";
      return;
    }

    const body: any = {
      fullName : this.fullName,
      phoneNumber : this.phone,
      city: this.city,
      emailId :this.email,
      password:this.password,
      address: this.address,
      // role: "foodie" 
      role: "admin" 
     
    }
    console.log("=======>",body);

    this.fService.signUp(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.userId){
        alert("Registration sucessful");
        this.router.navigate(["/login"]);
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
