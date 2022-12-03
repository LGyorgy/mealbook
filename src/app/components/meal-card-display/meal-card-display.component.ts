import { Component, Input } from '@angular/core';
import { SimpleMeal } from 'src/app/interfaces/simple-meal';

@Component({
  selector: 'app-meal-card-display',
  templateUrl: './meal-card-display.component.html'
})
export class MealCardDisplayComponent {
  @Input() meals!: SimpleMeal[];
}
