import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/services/meal.service';
import { Meal } from 'src/interfaces/meal';

@Component({
  selector: 'app-meal-route',
  templateUrl: './meal-route.component.html',
  styleUrls: ['./meal-route.component.css']
})
export class MealRouteComponent {
  meal: Meal | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService
    ) {}

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mealService.getMeal(id).subscribe(meal => this.meal = meal);
  }
}
