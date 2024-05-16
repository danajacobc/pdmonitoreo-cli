
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plantas } from '../interfaces/plantas';

@Injectable({providedIn: 'root'})
export class PlantasService {

  private serverUrl: string = 'http://localhost:8080/pdm/'

  constructor(private http: HttpClient) { }

  getAllPlants() {
    const URL =this.serverUrl + 'plantas'
    return this.http.request<Plantas[]>('get',URL)
  }
}
