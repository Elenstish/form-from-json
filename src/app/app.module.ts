import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing-module";
import { jsonFormReducer } from "./json-form/store/reducers/json-form.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSnackBarModule,
    StoreModule.forRoot({jsonSchema: jsonFormReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
