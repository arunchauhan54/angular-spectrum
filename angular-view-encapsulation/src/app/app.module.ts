import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from "./material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './navbar/navbar.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import { OrderItemComponent } from './order-item/order-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
