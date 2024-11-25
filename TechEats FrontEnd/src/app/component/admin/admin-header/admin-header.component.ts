import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FoodieServiceService } from '../../../foodie-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  url: string = '';
  userName: string = '';
  
  constructor(
    private route:Router,
    private aservice: FoodieServiceService,
    private changeDetector:ChangeDetectorRef
    ){
      if (this.aservice.getUserName() !== null) {
        this.userName = this.aservice.getUserName();
      }
    }
  
    ngOnInit(): void {
      this.route.events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe((event: any) => {
        this.url = event?.url;
      });
  
    }  
    gotourl(link: string): void {
      if (link === '/admin/logout') {
        this.aservice.foodieLogout();
        return;
      }
      this.route.navigate([link]);
  
  }
}
