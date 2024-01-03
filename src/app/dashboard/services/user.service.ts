import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FormUser } from '../interfaces/form.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _http = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  constructor() {}

  getAllUsers(): Observable<FormUser[]> {
    return this._http.get<FormUser[]>(`${this.baseUrl}/user/list`);
  }

  createUser(user: FormUser): Observable<FormUser> {
    const { age, email, name } = user;
    const body = { email, name, age: +age };
    return this._http.post<FormUser>(`${this.baseUrl}/user/save`, body);
  }
}
