import { Component, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-category-card-display',
  templateUrl: './category-card-display.component.html'
})
export class CategoryCardDisplayComponent {
 @Input() categories!: Category[];
}
