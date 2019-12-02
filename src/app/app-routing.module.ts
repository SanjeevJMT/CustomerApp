import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";


const routes: Routes = [
  
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'list-customer', component: ListCustomerComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }