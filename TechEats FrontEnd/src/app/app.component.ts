import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { FoodieServiceService } from './foodie-service.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fof';
  isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor(
    private route:Router,
    private fservice:FoodieServiceService)
    {
      this.route.events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe((event: any) => {
        if (typeof localStorage !== 'undefined') {
        if (this.fservice.getUserRole() !== null && this.fservice.getUserRole() === "foodie") {
          setTimeout(() => {
            this.isLoggedIn = true;
            this.isAdminLoggedIn = false; 
            console.log('33333333');
          }, 100);
        } else {
          console.log('>>>>>>', this.fservice.getUserRole());
          if (this.fservice.getUserRole() !== null && this.fservice.getUserRole() === "admin") {
            setTimeout(() => {
              console.log("11111111111");
              this.isAdminLoggedIn = true;
              this.isLoggedIn = false;
            }, 100);
          } {
            setTimeout(() => {
              console.log("222222222");
              this.isLoggedIn = false;
              this.isAdminLoggedIn = false;
            }, 1);
          }
        }
      }
      });
}
}
