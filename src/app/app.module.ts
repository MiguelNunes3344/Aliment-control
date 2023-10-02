import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StockFoodComponent } from './header/stock-food/stock-food.component';
import { ListFoodComponent } from './header/stock-food/list-food/list-food.component';
import { ListFoodEditComponent } from './header/stock-food/list-food-edit/list-food-edit.component';
import { PackedDetailsComponent } from './header/packed-lunch/packed-details/packed-details.component';
import { PackedListComponent } from './header/packed-lunch/packed-list/packed-list.component';
import { PackedLunchComponent } from './header/packed-lunch/packed-lunch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockFoodComponent,
    ListFoodComponent,
    ListFoodEditComponent,
    PackedDetailsComponent,
    PackedListComponent,
    PackedLunchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
