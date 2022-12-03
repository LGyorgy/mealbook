import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { Category } from 'src/interfaces/category';

@Component({
  selector: 'app-categories-route',
  templateUrl: './categories-route.component.html'
})
export class CategoriesRouteComponent {
  categories: Category[] | undefined;

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.initializeCategories();
  }

  private initializeCategories() {
    this.mealService.getCategories().subscribe(
      categories => this.categories = categories
    )
  }
}
