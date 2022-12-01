import { Component, Input } from '@angular/core';
import { SimpleMeal } from 'src/interfaces/simple-meal';

@Component({
  selector: 'app-meal-card-display',
  templateUrl: './meal-card-display.component.html',
  styleUrls: ['./meal-card-display.component.css']
})
export class MealCardDisplayComponent {
  @Input() meals!: SimpleMeal[];
}
