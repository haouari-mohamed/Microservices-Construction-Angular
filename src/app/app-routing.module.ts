import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { ShowAllProjetsComponent } from './projet/show-all-projets/show-all-projets.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegistreComponent},
  { path: 'add', component: AddProjetComponent },
  { path: 'projets', component:ShowAllProjetsComponent},
  { path: 'updateprojet/:id', component:UpdateProjetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
