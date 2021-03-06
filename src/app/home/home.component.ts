import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPoster } from '../services/form-poster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public languages: string[] = [];
  model = new Employee('Que', 'Smith', true, 'w2', 'Dutch');
  hasPrimaryLanguageError: boolean = false;
  constructor(private formPoster: FormPoster) { }

  ngOnInit() {
    this.formPoster.getLanguages().subscribe(
      data => {
        console.log('data:', data);
        this.languages = data.data.languages
      },
      err => console.log('get error: ', err)
    );
  }

  submitForm(form: NgForm) {
    console.log('form.value:', form.value);
    console.log('this.model:', this.model);
    //validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError)
      return;

    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err) 
      );
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
