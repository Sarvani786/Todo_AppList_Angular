import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For form handling

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';

import { TaskListComponent } from './components/Task-list/Task-list.component';
import { TaskFormComponent } from './components/Task-form/Task-form.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent, 
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService], // Add the UserService here
  bootstrap: [AppComponent]
})
export class AppModule { }
