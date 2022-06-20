import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParticipantComponent } from './components/add-participant/add-participant.component';
import { EditParticipantComponent } from './components/edit-participant/edit-participant.component';
import { ListParticipantComponent } from './components/list-participant/list-participant.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableParticipantComponent } from './components/table-participant/table-participant.component';

const routes: Routes = [

    {path:'', pathMatch:'full', redirectTo:'add-participant'},
    {path:'add-participant', component: AddParticipantComponent},
    {path:'edit-participant/:id', component: EditParticipantComponent},
    {path:'list-participant', component: ListParticipantComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'createparticipant', component: TableParticipantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
