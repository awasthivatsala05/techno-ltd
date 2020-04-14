import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  currentVal=null;
  powers = ['Smart Coder', 'Super Flexible',
  'Logical Thinker', 'Excellent Analyst'];
  model = new Employee(18, '', '', '');
  submitted = false;
  onSubmit() { this.submitted = true;
  
  }
  public getValue(name: string ){
     this.currentVal=name;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
