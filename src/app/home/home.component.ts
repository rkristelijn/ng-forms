import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public languages: string[] = ["English", "Spanish", "Dutch", "Other"]; 
  model = new Employee('Darla', 'Smith');
  constructor() { }

  ngOnInit() {
  }

}
