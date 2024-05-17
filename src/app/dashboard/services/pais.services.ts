import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private serverUrl: string = 'https://pdmonitoreo-server.onrender.com/pdm/'

  constructor(private http: HttpClient) { }

}
