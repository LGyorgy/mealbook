import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/interfaces/meal';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/interfaces/category';
import { SimpleMeal } from 'src/app/interfaces/simple-meal';
import { Area } from 'src/app/interfaces/area';
import { IngredientOption } from 'src/app/interfaces/ingredient-option';

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

  public getMealsByCategory(category: string): Observable<SimpleMeal[]> {
    const url = `${this.apiBaseUrl}/filter.php?c=${category}`
    return this.http.get<any>(url).pipe(
      map(data => this.createSimpleMealsFromSimpleMealsDto(data["meals"]))
    );
  }

  public getMealsByArea(area: string): Observable<SimpleMeal[]> {
    const url = `${this.apiBaseUrl}/filter.php?a=${area}`
    return this.http.get<any>(url).pipe(
      map(data => this.createSimpleMealsFromSimpleMealsDto(data["meals"]))
    );
  }

  public getAreas(): Observable<Area[]> {
    const url = `${this.apiBaseUrl}/list.php?a=list`;
    return this.http.get<any>(url).pipe(
      map(data => this.createAreasFromAreasDto(data["meals"]))
    );
  }

  public getIngredientOptions(): Observable<IngredientOption[]> {
    const url = `${this.apiBaseUrl}/list.php?i=list`;
    return this.http.get<any>(url).pipe(
      map(data => this.createIngredientOptionsFromIngredientOptionsDto(data["meals"]))
    );
  }

  private createAreasFromAreasDto(areasDto: []): Area[] {
    let areas: Area[] = [];

    areasDto.forEach(areaDto => {
      let area: Area = {} as Area;
      area.name = areaDto["strArea"];
      areas.push(area);
    })

    return areas;
  }

  private createIngredientOptionsFromIngredientOptionsDto(ingredientsDto: any): IngredientOption[] {
    let options: IngredientOption[] = [];

    ingredientsDto.forEach((ingredientDto: any) => {
      let option: IngredientOption = this.createIngredientOptionFromIngredientOptionDto(ingredientDto);
      options.push(option);
    })

    return options
  }

  private createIngredientOptionFromIngredientOptionDto(ingredientDto: any): IngredientOption {
    let option: IngredientOption = {} as IngredientOption;

    option.id = ingredientDto["idIngredient"];
    option.name = ingredientDto["strIngredient"];
    option.description = ingredientDto["strDescription"];
    option.type = ingredientDto["strType"];

    return option;
  }

  private createMealFromMealDto = (mealDto: any): Meal => {
    let meal: Meal = {} as Meal;

    meal.id = mealDto["idMeal"];
    meal.name = mealDto["strMeal"];
    meal.category = mealDto["strCategory"];
    meal.area = mealDto["strArea"];
    meal.instructions = mealDto["strInstructions"];
    meal.tags = mealDto["strTags"]?.split(',');
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

  private createSimpleMealFromSimpleMealDto(mealDto: any): SimpleMeal {
    let meal: SimpleMeal = {} as SimpleMeal;

    meal.id = +mealDto["idMeal"];
    meal.name = mealDto["strMeal"];
    meal.thumb = mealDto["strMealThumb"];

    return meal;
  }

  private createSimpleMealsFromSimpleMealsDto(mealsDto: any[]): SimpleMeal[] {
    let meals: SimpleMeal[] = [];

    mealsDto.forEach(mealDto => {
      let meal: SimpleMeal = this.createSimpleMealFromSimpleMealDto(mealDto);
      meals.push(meal);
    });

    return meals;
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
