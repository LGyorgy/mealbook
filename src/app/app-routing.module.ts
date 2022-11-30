import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';

const routes: Routes = [
  { path: 'meals/:id', component: MealDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
