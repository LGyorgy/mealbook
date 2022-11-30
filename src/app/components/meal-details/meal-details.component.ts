import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { Meal } from 'src/interfaces/meal';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent {
  meal: Meal | undefined;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): void {
    this.mealService.getMeal(52772).subscribe(meal => this.meal = meal);
  }
}
