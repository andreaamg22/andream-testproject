import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




//Components

import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { EditParticipantComponent } from './components/edit-participant/edit-participant.component';
import { ListParticipantComponent } from './components/list-participant/list-participant.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableParticipantComponent } from './components/table-participant/table-participant.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SharedModule } from './components/shared/shared.module';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { CreateadminComponent } from './components/dashboard/createadmin/createadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    AddParticipantComponent,
    EditParticipantComponent,
    ListParticipantComponent,
    LoginComponent,
    DashboardComponent,
    TableParticipantComponent,
    NavbarComponent,
    InicioComponent,
    ReportsComponent,
    CreateadminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
    
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
