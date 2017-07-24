import { User } from './../../users.model';
import { UsersService } from './../users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

import {DataSource} from '@angular/cdk';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  temp = [];
  // columns = [
  //   { prop: 'Id' },
  //   { name: 'Full Name' },
  //   { picture: 'Photo' },
  //   { name: 'Average Grade' },
  //   { name: '# of Delivered Homeworks' },
  //   { name: '# of Missing Homeworks' },
  //   { name: 'Last time the student\'s information was updated' }
  // ];
   

  rows: User[];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .then((users: User[]) => this.rows = users);
  }


  /*
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
*/
}
