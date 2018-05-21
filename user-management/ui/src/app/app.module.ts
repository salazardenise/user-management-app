import { UsersService } from './users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import {RouterModule, Routes} from '@angular/router';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';


const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'new',
    component: NewUserFormComponent
  },
  {
    path: 'update',
    component: UpdateUserFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NewUserFormComponent,
    UpdateUserFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }