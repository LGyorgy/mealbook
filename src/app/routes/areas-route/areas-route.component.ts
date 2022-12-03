import { Component } from '@angular/core';
import { MealService } from 'src/app/services/meal.service';
import { Area } from 'src/app/interfaces/area';

@Component({
  selector: 'app-areas-route',
  templateUrl: './areas-route.component.html'
})
export class AreasRouteComponent {
  areas: Area[] | undefined;

  constructor(public mealService: MealService) {}

  ngOnInit() {
    this.initializeAreas();
  }

  private initializeAreas() {
    this.mealService.getAreas().subscribe(
      areas => this.areas = areas
    )
  }
}
