import { Injectable } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';
import { TheMealDbApiService } from './the-meal-db-api.service';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { SimpleMeal } from 'src/app/interfaces/simple-meal';
import { Area } from 'src/app/interfaces/area';
import { IngredientOption } from 'src/app/interfaces/ingredient-option';

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

  public getIngredientOptions(): Observable<IngredientOption[]> {
    return this.api.getIngredientOptions();
  }

  public getMealsByCategory(category: string): Observable<SimpleMeal[]> {
    return this.api.getMealsByCategory(category);
  }

  public getMealsByArea(area: string): Observable<SimpleMeal[]> {
    return this.api.getMealsByArea(area);
  }
}
