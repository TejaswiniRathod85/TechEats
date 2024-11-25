import { Component } from '@angular/core';
import { FoodieServiceService } from '../../foodie-service.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  emailId: string='';
  isShowChangePassword: boolean = false;
  newPassword: string = '';
  user: any;

  constructor(
    private fservice: FoodieServiceService,
    private route: Router
  ){

  }

  ngOnInit(): void{

  }
  onSubmit(): void{
    const body = {
      emailId: this.emailId
    };

    this.fservice.forgotPassword(body).pipe(take(1)).subscribe((res) =>{
      if(!!res && res?.userId){
        this.user = res;
        this.isShowChangePassword = true;
      }
    }, err => {
      this.isShowChangePassword = false;
      alert("User not found.please enter valid email.");
    }
    );
  }

  onChangePassword(): void {
    this.user.password = this.newPassword;
    this.fservice.changePassword(this.user?.userId,this.newPassword).pipe(take(1)).subscribe((res) => {
      if (res && res.userId) {
        alert("Password changed successfully");
        this.route.navigate(["/login"]);
      }
    }, error => {
      alert("Error occured while changing password.");
    });
  }
}
