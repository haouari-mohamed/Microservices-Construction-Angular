import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { ShowAllProjetsComponent } from './projet/show-all-projets/show-all-projets.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';
import { UpdateResourceComponent } from './ressource/update-resource/update-resource.component';
import { ShowAllResourceComponent } from './ressource/show-all-resource/show-all-resource.component';
import { AddResourceComponent } from './ressource/add-resource/add-resource.component';
import { ShowTachesComponent } from './tache/show-taches/show-taches.component';
import { AddTacheComponent } from './tache/add-tache/add-tache.component';
import { UpadateTacheComponent } from './tache/upadate-tache/upadate-tache.component';
import { ShowRessourceTacheComponent } from './tache/show-ressource-tache/show-ressource-tache.component';
import { AssignRessourceComponent } from './tache/assign-ressource/assign-ressource.component';
import { DashboardComponent } from './dash-admin/dashboard/dashboard.component';
import { ProjetComponent } from './dash-admin/projet/projet.component';
import { TacheComponent } from './dash-admin/tache/tache.component';
import { ResourceComponent } from './dash-admin/resource/resource.component';
import { AllressourceComponent } from './dash-admin/allressource/allressource.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'addprojet', component: AddProjetComponent },
  // { path: 'projets', component:ShowAllProjetsComponent},
  // { path: 'updateprojet/:id', component:UpdateProjetComponent},
  // { path: 'resources', component:ShowAllResourceComponent},
  // { path: 'updateresource/:id', component:UpdateResourceComponent},
  // { path: 'addresource', component: AddResourceComponent },
  // { path: 'showalltaches/:id', component: ShowTachesComponent },
  // { path: 'addtache', component: AddTacheComponent },
  // { path: 'updatetache/:id', component: UpadateTacheComponent },
  // { path: 'ressourcestache/:id', component: ShowRessourceTacheComponent },
  // { path: 'assign/:id', component: AssignRessourceComponent },

  {path : 'dashboard', component : DashboardComponent , children : [
    
      {path : 'projet' , component : ProjetComponent , children : [
        {path : '' , component : AddProjetComponent },
        {path : 'update/:id' , component : UpdateProjetComponent },
      ]},

      {path : 'tache/:id' , component :TacheComponent , children : [
        {path : '' , component : AddTacheComponent },
        {path : 'update/:idT' , component : UpadateTacheComponent },
      ]},

      {path:'resource/:id' ,component:ResourceComponent},

      {path:'resources' ,component:AllressourceComponent,children:[
        {path : '' , component : AddResourceComponent },
        {path : 'update/:id' , component : UpdateResourceComponent },

      ]}


  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
