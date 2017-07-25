import { UndefinedComponent } from './users/undefined/undefined.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserListComponent } from './users/user-list/user-list.component';

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'user-create', component: UserCreateComponent },
    { path: '**', component: UndefinedComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
