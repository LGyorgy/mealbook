import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html'
})
export class MealDetailsComponent {
  @Input() meal!: Meal;
}
