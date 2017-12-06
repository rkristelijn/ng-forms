import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee.model';

const httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FormPoster {
    constructor(private http: Http) { }

    postEmployeeForm(employee: Employee): Observable<any> {
        console.log('posting employee: ', employee);
        let url = 'http://192.168.0.7:3100/postemployee';
        let body = JSON.stringify(employee);

        return this.http.post(url, body, httpOptions)
            .map((response: Response) => response.json())
            .do(data => JSON.stringify(data))
    }

    private handleError(error: Response) {
        console.log('handleError', error);
    }
}