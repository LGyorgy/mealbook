import { Injectable } from '@angular/core';
import { Meal } from 'src/interfaces/meal';
import { TheMealDbApiService } from './the-meal-db-api.service';
import { Observable, of } from 'rxjs';
import { Category } from 'src/interfaces/category';
import { SimpleMeal } from 'src/interfaces/simple-meal';
import { Area } from 'src/interfaces/area';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private api: TheMealDbApiService) { }

  public getMeal(id: number): Observable<Meal> {
    return this.api.getMeal(id);
  }

  public getCategories(): Observable<Category[]> {
    return this.api.getCategories();
  }

  public getAreas(): Observable<Area[]> {
    return this.api.getAreas();
  }

  public getMealsByCategory(category: string): Observable<SimpleMeal[]> {
    return this.api.getMealsByCategory(category);
  }
}
