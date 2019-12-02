import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CustomerService } from "../service/customer.service";
import { Customer } from "../model/customer.model";
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];
  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    if (localStorage.getItem('customers') === null || localStorage.getItem('customers') == undefined) {
      this.router.navigate(['add-customer']);
    } else {
      this.customers = JSON.parse(localStorage.getItem('customers'));
      console.log(this.customers);
      this.customerService.sortDescending(this.customers);
      console.log(this.customers);
    }

    // return this.customerService.getCustomer().subscribe( data => {
    //     this.customers = data;
    //   });
  }

  deleteUser(customer: Customer): void {
    this.customerService.deleteCustomer(customer.name)
      .subscribe(data => {
        this.customers = this.customers.filter(u => u !== customer);
      })
  };



  createCustomer(): void {
    this.router.navigate(['add-customer']);
  };

}


