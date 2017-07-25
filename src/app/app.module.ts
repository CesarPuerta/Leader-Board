import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';


import { UsersModule } from './users/users.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './users-mock.model';

import {MdTabsModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    UsersModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MdTabsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
