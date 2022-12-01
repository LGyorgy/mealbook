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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MealDetailsComponent,
    IngredientListComponent,
    CategoryCardDisplayComponent,
    CategoryCardComponent,
    MealRouteComponent
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
