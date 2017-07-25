import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MdButtonModule, MdCheckboxModule, MdTableModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { UsersService } from './users.service';
import { InMemoryDataService } from './../users-mock.model';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {PopupModule} from 'ng2-opd-popup';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule,
    CdkTableModule,
    NgxDatatableModule,
    PopupModule.forRoot()
  ],
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  entryComponents: [
    UserDetailsComponent
  ],
  exports: [
    UserListComponent,
    UserDetailsComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
