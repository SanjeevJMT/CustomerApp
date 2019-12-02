import { Injectable } from '@angular/core';

import { Customer } from "../model/customer.model";
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CustomerService {
  constructor() { }

  customers = [];
  getCustomer() {
    let customers = JSON.parse(localStorage.getItem('customers'));
    return customers;
  }

  createCustomer(customer: Customer) {
    console.log(customer + ' in service');
    let customers = new Array();
    if (localStorage.getItem('customers') !== undefined && localStorage.getItem('customers') !== null) {
      customers = JSON.parse(localStorage.getItem('customers'));
    }
    // Add New TodoService
    console.log(customer + ' in service');
    customers.push(customer);
    // Set New Todos
    localStorage.setItem('customers', JSON.stringify(customers));
    // return customers;
  }


  deleteCustomer(name: string) {
    let customers = JSON.parse(localStorage.getItem('customers'));

    for (let i = 0; i < customers.length; i++) {
      if (customers[i].text == name) {
        customers.splice(i, 1);
      }
    }
    // Set New Todos
    localStorage.setItem('customers', JSON.stringify(customers));
    return customers
  }

  sortAscending(customers) {

    customers.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

  }

  sortDescending(customers) {
    customers.sort(function (a, b) {
      if (a.name < b.name) { return 1; }
      if (a.name > b.name) { return -1; }
      return 0;
    })
  }

}