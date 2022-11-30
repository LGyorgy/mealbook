import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/interfaces/meal';
import { Ingredient } from 'src/interfaces/ingredient';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TheMealDbApiService {

  apiBaseUrl: string = "https://www.themealdb.com/api/json/v1/1";

  constructor(private http: HttpClient) { }

  public getMeal(id: number): Observable<Meal> {
    const url = `${this.apiBaseUrl}/lookup.php?i=${id}`
    return this.http.get<any>(url).pipe(
      map(data => this.createMealFromMealDto(data["meals"][0]))
    );
  }

  private createMealFromMealDto = (mealDto: any): Meal => {
    let meal: Meal = {} as Meal;

    meal.id = mealDto["idMeal"];
    meal.name = mealDto["strMeal"];
    meal.category = mealDto["strCategory"];
    meal.area = mealDto["strArea"];
    meal.instructions = mealDto["strInstructions"];
    meal.tags = mealDto["strTags"].split(',');
    meal.youtube = mealDto["strYoutube"];
    meal.ingredients = [] as Ingredient[];
    for (let i = 1; i <= 20; i++) {
      const propNameIngredient: string = `strIngredient${i}`;
      const propNameMeasure: string = `strMeasure${i}`;

      if (!mealDto[propNameIngredient]) {
        break;
      }

      let ingredient = {} as Ingredient;
      ingredient.name = mealDto[propNameIngredient];
      ingredient.measure = mealDto[propNameMeasure];
      meal.ingredients.push(ingredient);
    }

    meal.source = mealDto["strSource"];

    console.log(meal);
    return meal;
  }
}
