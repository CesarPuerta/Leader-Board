import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers } from '@angular/http';
import { User } from './../users.model';
import { InMemoryDataService } from './../users-mock.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';



@Injectable() export class UsersService {

  constructor(
    private http: Http
  ) { }

  private usersUrl = 'api/usersList';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  get()  {
    return this.http.get(this.usersUrl);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null);
  }

  update(user): Promise<any> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user);
  }

  create(user): Promise<User[]> {
    return this.http
      .post(this.usersUrl, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user);
  }
}
