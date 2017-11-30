import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Employee } from '../models/employee.model';

@Injectable()
export class FormPoster {
    constructor(private http: HttpModule) { }

    postEmployeeForm(employee: Employee) {
        console.log('posting employee: ', employee);
    }
}