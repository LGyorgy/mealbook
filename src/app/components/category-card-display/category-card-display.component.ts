import { Component, Input } from '@angular/core';
import { Category } from 'src/interfaces/category';

@Component({
  selector: 'app-category-card-display',
  templateUrl: './category-card-display.component.html',
  styleUrls: ['./category-card-display.component.css']
})
export class CategoryCardDisplayComponent {
 @Input() categories!: Category[];
}