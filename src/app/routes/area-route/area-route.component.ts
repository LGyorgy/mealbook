import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { SimpleMeal } from 'src/interfaces/simple-meal';

@Component({
  selector: 'app-area-route',
  templateUrl: './area-route.component.html'
})
export class AreaRouteComponent {
  area: string | undefined;
  meals: SimpleMeal[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
  ) {}

  ngOnInit() {
    this.area = String(this.route.snapshot.paramMap.get('areaName'));
    this.mealService.getMealsByArea(this.area).subscribe(
      meals => this.meals = meals
    )
  }
}
