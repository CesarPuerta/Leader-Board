import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { User } from './../users.model';
import { InMemoryDataService } from './../users-mock.model';
import { Injectable } from '@angular/core';

@Injectable() export class UsersService {

  constructor(
    private http: Http
  ) { }




  getUsers(): Promise<User[]> {
    return this.http.get('api/usersList')
              .toPromise()
              .then(response => response.json().data as User[]);
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
