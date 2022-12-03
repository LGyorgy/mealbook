import { Component, Input } from '@angular/core';
import { Category } from 'src/interfaces/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html'
})
export class CategoryCardComponent {
  @Input() category!: Category;
}
