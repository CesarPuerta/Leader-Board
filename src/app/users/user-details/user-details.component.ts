import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  constructor(private popup: Popup) {}
  ngOnInit() {
  }

  openPopup() {
    console.log('aaaaaaaaaaaaaa');
  }

}
