import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUserDTO, UserDTO } from '../dashboard/interfaces/userDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverUrl: string = 'https://pdmonitoreo-server.onrender.com/pdm/'

  constructor(private http: HttpClient) { }

  loginOrCreate(body: UserDTO) {
    const URL = this.serverUrl + 'user'
    return this.http.post<LoggedUserDTO>(URL, body)
  }

}
