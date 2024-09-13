import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RegistreComponent } from './auth/registre/registre.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { UpdateProjetComponent } from './projet/update-projet/update-projet.component';
import { ShowAllProjetsComponent } from './projet/show-all-projets/show-all-projets.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IntercepteurService } from './service/intercepteur/intercepteur.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowAllResourceComponent } from './ressource/show-all-resource/show-all-resource.component';
import { AddResourceComponent } from './ressource/add-resource/add-resource.component';
import { UpdateResourceComponent } from './ressource/update-resource/update-resource.component';
import { AssociateComponent } from './ressource/associate/associate.component';
import { ResourceTacheComponent } from './ressource/resource-tache/resource-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    ShowAllProjetsComponent,
    ShowAllResourceComponent,
    AddResourceComponent,
    UpdateResourceComponent,
    AssociateComponent,
    ResourceTacheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
