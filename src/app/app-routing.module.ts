import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCardDisplayComponent } from './components/category-card-display/category-card-display.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { CategoriesRouteComponent } from './routes/categories-route/categories-route.component';
import { MealRouteComponent } from './routes/meal-route/meal-route.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesRouteComponent },
  { path: 'categories/:categoryName', component: CategoryCardDisplayComponent },
  { path: 'meals/:id', component: MealRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
