import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCardDisplayComponent } from './components/category-card-display/category-card-display.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';

const routes: Routes = [
  { path: 'categories', component: CategoryCardDisplayComponent },
  { path: 'categories/:categoryName', component: CategoryCardDisplayComponent },
  { path: 'meals/:id', component: MealDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
