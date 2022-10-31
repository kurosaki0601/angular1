import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post('https://reqres.in/api/login', user);
  }
  isLogIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('token');
  }
}
