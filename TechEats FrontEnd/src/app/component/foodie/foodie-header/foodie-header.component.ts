import { Component,OnInit } from '@angular/core';
import { FoodieServiceService } from '../../../foodie-service.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-foodie-header',
  templateUrl: './foodie-header.component.html',
  styleUrl: './foodie-header.component.css'
})
export class FoodieHeaderComponent implements OnInit {
  url: string = "/foodie/home";
  userName: string = '';
  constructor(
    private router:Router,
    private bservice : FoodieServiceService
  ) {
    if (this.bservice.getUserName() !== null) {
      this.userName = this.bservice.getUserName();
    }
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  routerToLink(link: string): void {
    if (link === '/foodie/logout') {
      this.bservice.foodieLogout();
      return;
    }
    this.router.navigate([link]);
  }


}
