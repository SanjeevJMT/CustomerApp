import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {CustomerService} from "./service/customer.service";

@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    AddCustomerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }