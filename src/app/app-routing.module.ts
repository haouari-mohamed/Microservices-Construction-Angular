import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegistreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
