import {MdDialog, MdDialogRef} from '@angular/material';

import { SharedComponent } from './../shared/shared.component';



import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

import {DataSource} from '@angular/cdk';


import { User } from './../../users.model';
import { UsersService } from './../users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  

  rows: User[];
  temp = [];
  selectedOption: string;
  
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private usersService: UsersService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .then((users: User[]) => this.rows = users);
  }

  loadUsers() {
    this.usersService.getUsers().then((users: User[]) => this.rows = users);
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    if (val === '') {
      this.loadUsers();
    } else {
      this.temp = this.rows.filter(function(d) {
        return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      });
    }

    // update the rows
    this.rows = this.temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  onActivate(data) {
    this.openDialog(data);
  }

  openDialog(data) {
    const dialogRef = this.dialog.open(SharedComponent, {
      data: data.row,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadUsers();
    });
  }


  delete(user): void {
    this.usersService
        .deleteUser(user.id)
        .then(() => {
          this.loadUsers();
        });
  }
}
