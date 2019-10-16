import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AswireService {
  items = [];

  constructor(
    private http: HttpClient
  ) { }

  getItems() {
    return this.http.get(environment.apiUrl + '/aswire');
  }
}
