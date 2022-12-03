import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaRouteComponent } from './routes/area-route/area-route.component';
import { AreasRouteComponent } from './routes/areas-route/areas-route.component';
import { CategoriesRouteComponent } from './routes/categories-route/categories-route.component';
import { CategoryRouteComponent } from './routes/category-route/category-route.component';
import { IngredientRouteComponent } from './routes/ingredient-route/ingredient-route.component';
import { IngredientsRouteComponent } from './routes/ingredients-route/ingredients-route.component';
import { MealRouteComponent } from './routes/meal-route/meal-route.component';

const routes: Routes = [
  { path: '', redirectTo: "categories", pathMatch: 'full' },
  { path: 'categories', component: CategoriesRouteComponent },
  { path: 'categories/:categoryName', component: CategoryRouteComponent },
  { path: 'areas', component: AreasRouteComponent },
  { path: 'areas/:areaName', component: AreaRouteComponent },
  { path: 'ingredients', component: IngredientsRouteComponent },
  { path: 'ingredients/:ingredientName', component: IngredientRouteComponent },
  { path: 'meals/:id', component: MealRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
