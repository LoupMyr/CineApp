import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = "http://localhost:8000/cineScape/";

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url+"postUtilisateur", user, {});
  }

}
