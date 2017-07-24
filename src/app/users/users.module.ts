import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdCheckboxModule, MdTableModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { UsersService } from './users.service';
import { InMemoryDataService } from './../users-mock.model';
import { UserListComponent } from './user-list/user-list.component';
import { UserCrudComponent } from './user-crud/user-crud.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule,
    CdkTableModule
  ],
  declarations: [
    UserListComponent,
    UserCrudComponent
  ],
  exports: [
    UserListComponent,
    UserCrudComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
