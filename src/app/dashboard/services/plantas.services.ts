
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plantas } from '../interfaces/plantas';

@Injectable({providedIn: 'root'})
export class PlantasService {

  private serverUrl: string = 'https://pdmonitoreo-server.onrender.com/pdm/'

  constructor(private http: HttpClient) { }

  getAllPlants() {
    const URL =this.serverUrl + 'plantas'
    return this.http.request<Plantas[]>('get',URL)
  }

  deletePlant(id : string) {
    const URL = this.serverUrl + `plantas/${id}`
    return this.http.request<Boolean>('delete', URL)
  }

  createPlant(body: any) {
    const URL = this.serverUrl + `plantas`;
    return this.http.post<Boolean>(URL, body);
  }
}
