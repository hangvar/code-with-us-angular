import { Component } from '@angular/core';

import { Customer } from './model';


@Component({
  moduleId: module.id,
  selector: 'my-app', //css decorator to find app tag in html
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent  {

  regions = ['east', 'south', 'north', 'west', 'midwest'];

  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      street: 'Smithosonian street 42',
      city: 'Washington DC',
      region: 'east',
      state: 'California',
    }
  };
  hideAddress = false;
}
