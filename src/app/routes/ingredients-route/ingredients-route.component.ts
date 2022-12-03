import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { IngredientOption } from 'src/app/interfaces/ingredient-option';

@Component({
  selector: 'app-ingredients-route',
  templateUrl: './ingredients-route.component.html'
})
export class IngredientsRouteComponent {
  ingredients: IngredientOption[] | undefined;

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.initializeIngredients();
  }

  initializeIngredients() {
    this.mealService.getIngredientOptions().subscribe(
      ingredients => this.ingredients = ingredients
    )
  }
}
