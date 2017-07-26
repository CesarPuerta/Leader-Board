import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers } from '@angular/http';
import { User } from './../users.model';
import { InMemoryDataService } from './../users-mock.model';
import { Injectable } from '@angular/core';

@Injectable() export class UsersService {

  constructor(
    private http: Http
  ) { }

  private usersUrl = 'api/usersList';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  get(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[]);
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

  /*
  getUsers() {
    return this.http.get('api/usersList')
      .subscribe((Response: Response) => {
        Response.json().data.map((usersList: User) => {
            return User.createObject(
              usersList.id,
              usersList.name,
              usersList.picture,
              usersList.average_grade,
              usersList.homeworks_delivered,
              usersList.homeworks_missing,
              usersList.last_updated
            );
        });
    });
  }
  */
}
