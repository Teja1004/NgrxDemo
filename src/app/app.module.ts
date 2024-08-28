import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product2Component } from './product2/product2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    StoreModule.forRoot({ product: addProductReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
