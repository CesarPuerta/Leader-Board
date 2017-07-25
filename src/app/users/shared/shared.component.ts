import { User } from './../../users.model';
import { UsersService } from '../users.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  /*@Input() rows;
  @Output() reloadTable: EventEmitter<any> = new EventEmitter();
*/

  // id = this.data.id || '';
  // name = this.data.name || '';
  // picture = this.data.picture || '';
  // average_grade = this.data.average_grade || '';
  // homework_1 = this.data.homeworks.homework_1 || '';
  // homework_2 = this.data.homeworks.homework_2 || '';
  // homework_3 = this.data.homeworks.homework_3 || '';
  // homework_4 = this.data.homeworks.homework_4 || '';
  // homework_5 = this.data.homeworks.homework_5 || '';
  // last_updated = this.data.last_updated || '';
  user: User;

  constructor(
    public dialogRef: MdDialogRef<SharedComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private usersService: UsersService
  ) {
    this.user = User.createObject(
      this.data.id,
      this.data.name,
      this.data.picture,
      this.data.average_grade,
      0,
      0,
      'date'
    );
  }

  ngOnInit() {
  }


  saveUser() {
    this.usersService.updateUser({
      'id': this.id,
      'name': this.name,
      'picture': this.picture,
      'average_grade': 20,
      'homeworks': {
        'homework_1': this.homework_1,
        'homework_2': this.homework_2,
        'homework_3': this.homework_3,
        'homework_4': this.homework_4,
        'homework_5': this.homework_5
      },
      'homeworks_missing': 0,
      'last_updated': '07/24/2017'
    })
      .then(() => this.dialogRef.close());
  }

}
