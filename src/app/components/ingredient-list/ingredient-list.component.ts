import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/interfaces/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html'
})
export class IngredientListComponent {
  @Input() ingredients!: Ingredient[];
}
