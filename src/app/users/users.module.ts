import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MdButtonModule, MdCheckboxModule, MdTableModule, MdDialogModule, MdInputModule, MdRadioModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';


import { UsersService } from './users.service';
import { InMemoryDataService } from './../users-mock.model';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { SharedComponent } from './shared/shared.component';
import { UndefinedComponent } from './undefined/undefined.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule,
    CdkTableModule,
    NgxDatatableModule,
    MdDialogModule,
    MdInputModule,
    MdRadioModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    UserListComponent,
    UserCreateComponent,
    SharedComponent,
    UndefinedComponent
  ],
  entryComponents: [
    UserListComponent,
    UserCreateComponent,
    SharedComponent
  ],
  exports: [
    SharedComponent,
    UserListComponent,
    UserCreateComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
