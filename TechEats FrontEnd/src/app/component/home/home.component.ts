import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  gotoLogin() :void{
    this.route.navigate(['/login']);
  }
  
  constructor( private route: Router) {
  }
  
  ngOnInit(): void {
  }
  selectedMeal: string = 'veg_meal';

  selectMeal(mealId: string) {
    this.selectedMeal = mealId;
  }
}
