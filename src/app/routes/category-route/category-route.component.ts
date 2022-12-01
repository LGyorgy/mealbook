import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-route',
  templateUrl: './category-route.component.html',
  styleUrls: ['./category-route.component.css']
})
export class CategoryRouteComponent {

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const category = String(this.route.snapshot.paramMap.get('categoryName'));
  }
}
