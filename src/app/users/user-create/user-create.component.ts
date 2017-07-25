import { Component, OnInit, Input } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(
    public dialog: MdDialog
  ) {}
  ngOnInit() {
  }


}
