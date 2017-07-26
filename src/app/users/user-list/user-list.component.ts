import { MdDialog, MdDialogRef } from '@angular/material';

import { UserTemplateComponent } from './../user-template/user-template.component';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Rx'

import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

import { DataSource } from '@angular/cdk';


import { User } from './../../users.model';
import { UsersService } from './../users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: User;
  rows = [];
  rows2 = [];
  temp = [];
  showFullView = true;
  tableButtonName = 'Show compact View';


  selectedOption: string;
  average: number;


  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private usersService: UsersService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.usersService.get()
      .subscribe((Response) => {
        Response.json().data.map((userData) => {
          const dataUpdated = this.updateValues(userData);
          this.rows.push(dataUpdated);
          this.rows2.push(dataUpdated);
        });
      });
  }

  getAverage(h1, h2, h3, h4, h5) {
    return ((Number(h1) + Number(h2) + Number(h3) + Number(h4) + Number(h5)) / 5);
  }

  getCounter(userData, isMissing) {
    let counter = 0;

    if ((isMissing) ? Number(userData.homework_1) === 0 : Number(userData.homework_1) !== 0) {
      counter++;
    }
    if ((isMissing) ? Number(userData.homework_2) === 0 : Number(userData.homework_2) !== 0) {
      counter++;
    }
    if ((isMissing) ? Number(userData.homework_3) === 0 : Number(userData.homework_3) !== 0) {
      counter++;
    }
    if ((isMissing) ? Number(userData.homework_4) === 0 : Number(userData.homework_4) !== 0) {
      counter++;
    }
    if ((isMissing) ? Number(userData.homework_5) === 0 : Number(userData.homework_5) !== 0) {
      counter++;
    }
    return counter;
  }

  updateValues(userData) {
    userData.average_grade = this.getAverage(
      userData.homework_1,
      userData.homework_2,
      userData.homework_3,
      userData.homework_4,
      userData.homework_5);
    
    userData.homeworks_missing = this.getCounter(userData, true);
    userData.homeworks_delivered = this.getCounter(userData, false);
    userData.color_name = (userData.homeworks_missing !== 0) ? 'red' : 'green';

    return userData;
  }

  loadUsers() {
    this.rows = [];
    this.rows2 = [];
    this.usersService.get()
      .subscribe((Response) => {
        Response.json().data.map((userData) => {
          const dataUpdated = this.updateValues(userData);
          this.rows.push(dataUpdated);
          this.rows2.push(dataUpdated);
        });
      });
  }

  updateFilter(event) {
    this.temp = [];
    const val = event.target.value.toLowerCase();
    this.temp = this.rows2.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = this.temp;
  }

  onActivate(data) {
    this.openDialog(data);
  }

  openDialog(data) {
    const dialogRef = this.dialog.open(UserTemplateComponent, {
      data: data.row,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.loadUsers();
      }
    });
  }

  delete(user): void {
    this.usersService
      .delete(user.id)
      .then(() => {
        this.loadUsers();
      });
  }

  createUser(): void {
    const dialogRef = this.dialog.open(UserTemplateComponent, {
      data: { 'createUser': true },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.loadUsers();
      }
    });
  }

  changeView() {
    this.showFullView = !this.showFullView;
  }
}
