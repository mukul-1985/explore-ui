import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from "../environments/environment";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AswireService {
  products: any;

  constructor(
    private http: HttpClient
  ) { }

  getItems() {
    return this.http.get(environment.apiUrl + '/aswire');
  }

  addItem(product): Observable<any> {
    return this.http.post(environment.apiUrl + '/aswire/add', product, httpOptions);
  }
}
