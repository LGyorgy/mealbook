import { Component, Input } from '@angular/core';
import { SimpleMeal } from 'src/interfaces/simple-meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html'
})
export class MealCardComponent {
  @Input() meal!: SimpleMeal;
}
