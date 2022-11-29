import { Injectable } from '@angular/core';
import { Meal } from 'src/interfaces/meal';
import { Ingredient } from 'src/interfaces/ingredient';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  mockData = {
    "meals": [
        {
            "idMeal": "52819",
            "strMeal": "Cajun spiced fish tacos",
            "strDrinkAlternate": null,
            "strCategory": "Seafood",
            "strArea": "Mexican",
            "strInstructions": "Cooking in a cajun spice and cayenne pepper marinade makes this fish super succulent and flavoursome. Top with a zesty dressing and serve in a tortilla for a quick, fuss-free main that's delightfully summery.\r\n\r\nOn a large plate, mix the cajun spice and cayenne pepper with a little seasoning and use to coat the fish all over.\r\n\r\nHeat a little oil in a frying pan, add in the fish and cook over a medium heat until golden. Reduce the heat and continue frying until the fish is cooked through, about 10 minutes. Cook in batches if you don’t have enough room in the pan.\r\n\r\nMeanwhile, prepare the dressing by combining all the ingredients with a little seasoning.\r\nSoften the tortillas by heating in the microwave for 5-10 seconds. Pile high with the avocado, lettuce and spring onion, add a spoonful of salsa, top with large flakes of fish and drizzle over the dressing.",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
            "strTags": "Spicy,Fish",
            "strYoutube": "https://www.youtube.com/watch?v=N4EdUt0Ou48",
            "strIngredient1": "cajun",
            "strIngredient2": "cayenne pepper",
            "strIngredient3": "white fish",
            "strIngredient4": "vegetable oil",
            "strIngredient5": "flour tortilla",
            "strIngredient6": "avocado",
            "strIngredient7": "little gem lettuce",
            "strIngredient8": "spring onion",
            "strIngredient9": "salsa",
            "strIngredient10": "sour cream",
            "strIngredient11": "lemon",
            "strIngredient12": "garlic",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "2 tbsp",
            "strMeasure2": "1 tsp",
            "strMeasure3": "4 fillets",
            "strMeasure4": "1 tsp",
            "strMeasure5": "8",
            "strMeasure6": "1 sliced",
            "strMeasure7": "2 shredded",
            "strMeasure8": "4 shredded",
            "strMeasure9": "1 x 300ml",
            "strMeasure10": "1 pot",
            "strMeasure11": "1",
            "strMeasure12": "1 clove finely chopped",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": "",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https://realfood.tesco.com/recipes/cajun-spiced-fish-tacos.html",
            "strImageSource": null,
            "strCreativeCommonsConfirmed": null,
            "dateModified": null
        }
    ]
  }

  constructor() { }

  public getMeal(index: number) {
    // returns mock data for testing purposes
    return this.createMealFromMealDto(this.mockData.meals[0]);
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