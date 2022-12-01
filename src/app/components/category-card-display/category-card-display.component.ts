import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { Category } from 'src/interfaces/category';

@Component({
  selector: 'app-category-card-display',
  templateUrl: './category-card-display.component.html',
  styleUrls: ['./category-card-display.component.css']
})
export class CategoryCardDisplayComponent {
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
