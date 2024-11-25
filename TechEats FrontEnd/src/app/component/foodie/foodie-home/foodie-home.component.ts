import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodie-home',
  templateUrl: './foodie-home.component.html',
  styleUrl: './foodie-home.component.css'
})
export class FoodieHomeComponent {
  gotoMealPlan() :void{
    this.route.navigate(['/meal-plan']);
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
