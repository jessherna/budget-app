import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
