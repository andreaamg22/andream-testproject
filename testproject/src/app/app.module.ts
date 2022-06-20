import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { EditParticipantComponent } from './components/edit-participant/edit-participant.component';
import { ListParticipantComponent } from './components/list-participant/list-participant.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableParticipantComponent } from './components/table-participant/table-participant.component';

@NgModule({
  declarations: [
    AppComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    ListParticipantComponent,
    LoginComponent,
    DashboardComponent,
    TableParticipantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
