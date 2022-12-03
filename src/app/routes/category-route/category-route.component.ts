import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { SimpleMeal } from 'src/app/interfaces/simple-meal';

@Component({
  selector: 'app-category-route',
  templateUrl: './category-route.component.html'
})
export class CategoryRouteComponent {
  category: string | undefined;
  meals: SimpleMeal[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.category = String(this.route.snapshot.paramMap.get('categoryName'));
    this.mealService.getMealsByCategory(this.category).subscribe(
      meals => this.meals = meals
    )
  }
}
