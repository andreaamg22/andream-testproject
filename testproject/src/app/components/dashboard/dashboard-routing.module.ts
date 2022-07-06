import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParticipantComponent } from '../list-participant/list-participant.component';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: '', component:DashboardComponent, children:[
    {path: '', component: InicioComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'usuarios', component: ListParticipantComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
