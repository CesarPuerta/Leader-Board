
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

import {DataSource} from '@angular/cdk';



import { User } from './../../users.model';
import { UsersService } from './../users.service';
import { UserDetailsComponent } from '../user-details/user-details.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Output() openPopup: EventEmitter<any> = new EventEmitter();

  rows: User[];
  temp = [];
  selectedOption: string;



  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .then((users: User[]) => this.rows = users);
  }


  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    if (val === '') {
      this.usersService.getUsers().then((users: User[]) => this.rows = users);
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


  onActivate(event) {
    console.log('Activate Event', event);
    this.openDialog();
  }


  openDialog() {
    this.openPopup.emit('Salio');
  }
}
