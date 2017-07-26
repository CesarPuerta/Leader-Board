import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MdButtonModule, MdCheckboxModule, MdTableModule, MdDialogModule, MdInputModule, MdRadioModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { FormsModule } from '@angular/forms';


import { UsersService } from './users.service';
import { InMemoryDataService } from './../users-mock.model';
import { UserListComponent } from './user-list/user-list.component';
import { UserTemplateComponent } from './user-template/user-template.component';


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
    FormsModule
  ],
  declarations: [
    UserListComponent,
    UserTemplateComponent
  ],
  entryComponents: [
    UserListComponent,
    UserTemplateComponent
  ],
  exports: [
    UserTemplateComponent,
    UserListComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
