import { User } from './../../users.model';
import { UsersService } from '../users.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {
  /*@Input() testing;
  @Output() reloadTable: EventEmitter<any> = new EventEmitter();
*/

  user: User;
  createUser = false;

  constructor(
    public dialogRef: MdDialogRef<UserTemplateComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private usersService: UsersService
  ) {
    if (this.data && this.data.createUser) {
      this.createUser = true;
    }
    this.user = this.buildData();
  }

  ngOnInit() {

  }


  buildData(): User {
    return User.createObject(
      this.data.id || Date.now() + Math.floor(Math.random()),
      this.data.name || '',
      this.data.color_name || 'green',
      this.data.picture || '',
      this.data.average_grade || 0,
      this.data.homework_1 || 0,
      this.data.homework_2 || 0,
      this.data.homework_3 || 0,
      this.data.homework_4 || 0,
      this.data.homework_5 || 0,
      this.data.homeworks_missing || 0,
      this.data.homeworks_delivered || 0,
      this.data.last_updated || ''
    );
  }

  submit(event) {
    console.log(event);
  }

  saveUser() {
    this.user.last_updated = new Date().toLocaleString();
    this.usersService.update(this.user)
      .then(() => this.dialogRef.close(true));
  }

  newUser() {
    this.user.last_updated = new Date().toLocaleString();
    this.usersService.create(this.user)
      .then(() => this.dialogRef.close(true));
  }
}
