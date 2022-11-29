import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent {

  constructor(private mealService: MealService) {}

  meal = this.mealService.getMeal(1);
}
