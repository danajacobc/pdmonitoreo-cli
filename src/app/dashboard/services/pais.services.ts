import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private serverUrl: string = 'localhost:8080/pdm/pais/{{id}}'

  constructor(private http: HttpClient) { }

}
