import { Component } from '@angular/core';
import { FoodieServiceService } from '../../../foodie-service.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-admin-home-chef-list',
  templateUrl: './admin-home-chef-list.component.html',
  styleUrl: './admin-home-chef-list.component.css'
})
export class AdminHomeChefListComponent {
  homeChefList: Array<any> = [];
  constructor(
    private service: FoodieServiceService
  ) {
    this.service.allHomeChefList().pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>>', res)
      if (res) {
        this.homeChefList = res;
      }
    });
  }
}
