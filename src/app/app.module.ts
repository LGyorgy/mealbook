import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { CategoryCardDisplayComponent } from './components/category-card-display/category-card-display.component';
import { CategoryCardComponent } from './components/category-card-display/category-card/category-card.component';
import { MealRouteComponent } from './routes/meal-route/meal-route.component';
import { CategoriesRouteComponent } from './routes/categories-route/categories-route.component';
import { CategoryRouteComponent } from './routes/category-route/category-route.component';
import { MealCardDisplayComponent } from './components/meal-card-display/meal-card-display.component';
import { MealCardComponent } from './components/meal-card-display/meal-card/meal-card.component';
import { AreasRouteComponent } from './routes/areas-route/areas-route.component';
import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaRouteComponent } from './routes/area-route/area-route.component';
import { IngredientsRouteComponent } from './routes/ingredients-route/ingredients-route.component';
import { IngredientOptionListComponent } from './components/ingredient-option-list/ingredient-option-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealDetailsComponent,
    IngredientListComponent,
    CategoryCardDisplayComponent,
    CategoryCardComponent,
    MealRouteComponent,
    CategoriesRouteComponent,
    CategoryRouteComponent,
    MealCardDisplayComponent,
    MealCardComponent,
    AreasRouteComponent,
    AreaListComponent,
    AreaRouteComponent,
    IngredientsRouteComponent,
    IngredientOptionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
