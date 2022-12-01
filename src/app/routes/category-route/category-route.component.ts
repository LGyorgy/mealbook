import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { Meal } from 'src/interfaces/meal';

@Component({
  selector: 'app-category-route',
  templateUrl: './category-route.component.html',
  styleUrls: ['./category-route.component.css']
})
export class CategoryRouteComponent {
  meals: Meal[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    const category = String(this.route.snapshot.paramMap.get('categoryName'));
    this.mealService.getMealsByCategory(category).subscribe(
      meals => console.log(meals)
    )
  }
}
