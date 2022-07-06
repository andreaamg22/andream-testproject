import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { EditParticipantComponent } from './components/edit-participant/edit-participant.component';
import { ListParticipantComponent } from './components/list-participant/list-participant.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableParticipantComponent } from './components/table-participant/table-participant.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { CreateadminComponent } from './components/dashboard/createadmin/createadmin.component';

const routes: Routes = [

    {path:'', pathMatch:'full', redirectTo:'login'},
    {path:'add-participant', component: AddParticipantComponent},
    {path:'edit-participant', component: EditParticipantComponent},
    {path:'list-participant', component: ListParticipantComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent },
    {path:'createparticipant', component: TableParticipantComponent},
    {path: '', component: InicioComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'create-user', component: CreateadminComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
