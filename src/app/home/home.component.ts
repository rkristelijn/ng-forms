import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public languages: string[] = ['English', 'Spanish', 'Dutch', 'Other'];
  model = new Employee('Darla', 'Smith', true, 'w2', 'default');
  hasPrimaryLanguageError: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ToUpperCase(field: string, value: string): void {
    if (value.length > 0)
      this.model[field] = value.charAt(0).toUpperCase() + value.slice(1);
    else
      this.model[field] = value;
  }

  validatePrimaryLanguage(value: string): void {
    if (value === 'default')
      this.hasPrimaryLanguageError = true;
    else
      this.hasPrimaryLanguageError = false;
  }

}
