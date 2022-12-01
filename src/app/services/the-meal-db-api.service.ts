import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/interfaces/meal';
import { Ingredient } from 'src/interfaces/ingredient';
import { map } from 'rxjs/operators';
import { Category } from 'src/interfaces/category';

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

  public getCategories(): Observable<Category[]> {
    const url = `${this.apiBaseUrl}/categories.php`
    return this.http.get<any>(url).pipe(
      map(data => this.createCategoriesFromCategoriesDto(data["categories"]))
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
    meal.thumb = mealDto["strMealThumb"];
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

  private createCategoryFromCategoryDto(categoryDto: any): Category {
    let category = {} as Category;

    category.id = +categoryDto["idCategory"];
    category.name = categoryDto["strCategory"];
    category.thumb = categoryDto["strCategoryThumb"];
    category.description = categoryDto["strCategoryDescription"];

    return category;
  }

  private createCategoriesFromCategoriesDto(categoryDto: any[]): Category[] {
    let categories: Category[] = [];

    categoryDto.forEach(categoryDto => {
      let category: Category = this.createCategoryFromCategoryDto(categoryDto);
      categories.push(category);
    });

    return categories;
  }
}
