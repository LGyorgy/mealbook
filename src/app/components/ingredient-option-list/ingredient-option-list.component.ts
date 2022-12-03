import { Component, Input } from '@angular/core';
import { IngredientOption } from 'src/app/interfaces/ingredient-option';

@Component({
  selector: 'app-ingredient-option-list',
  templateUrl: './ingredient-option-list.component.html'
})
export class IngredientOptionListComponent {
  @Input() ingredients!: IngredientOption[];
}
