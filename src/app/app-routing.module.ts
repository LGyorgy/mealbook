import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesRouteComponent } from './routes/categories-route/categories-route.component';
import { CategoryRouteComponent } from './routes/category-route/category-route.component';
import { MealRouteComponent } from './routes/meal-route/meal-route.component';

const routes: Routes = [
  { path: '', redirectTo: "categories", pathMatch: 'full' },
  { path: 'categories', component: CategoriesRouteComponent },
  { path: 'categories/:categoryName', component: CategoryRouteComponent },
  { path: 'meals/:id', component: MealRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
