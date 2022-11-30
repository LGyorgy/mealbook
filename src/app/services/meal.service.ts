import { Injectable } from '@angular/core';
import { Meal } from 'src/interfaces/meal';
import { Ingredient } from 'src/interfaces/ingredient';
import { TheMealDbApiService } from './the-meal-db-api.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private api: TheMealDbApiService) { }

  public getMeal(id: number): Observable<Meal> {
    return this.api.getMeal(id);
  }
}
