import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development ';
import { CreateUser, User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { baseUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() {}

  getAllUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/`);
  }

  registerUser(data: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(`${this.apiUrl}/user/`, data);
  }

  getUserId(nickname: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}/user/${nickname}`);
  }
}
