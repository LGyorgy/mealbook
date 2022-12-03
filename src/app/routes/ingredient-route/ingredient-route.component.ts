import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleMeal } from 'src/app/interfaces/simple-meal';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-ingredient-route',
  templateUrl: './ingredient-route.component.html'
})
export class IngredientRouteComponent {
  ingredient: string | undefined;
  meals: SimpleMeal[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.ingredient = String(this.route.snapshot.paramMap.get('ingredientName'));
    this.mealService.getMealsByIngredient(this.ingredient).subscribe(
      meals => this.meals = meals
    )
  }
}
