import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociateDto, Ressource } from '../../model/Construction.model';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {


  constructor(private http:HttpClient) { }

  urlApi="http://localhost:8888";

  public showAll():Observable<Ressource[]>{
    return this.http.get<Ressource[]>(`${this.urlApi}/RESSOURCE-SERVICE/ressources`)
  }
  public findRessourceTache(id:number):Observable<Ressource[]>{
    return this.http.get<Ressource[]>(`${this.urlApi}/RESSOURCE-SERVICE/ressources/${id}`)
  }
  public addRessource(ressource:Ressource){
    return this.http.post(`${this.urlApi}/RESSOURCE-SERVICE/admin/ressources`,ressource)
  }

  public deleteRessource(id:number){
    return this.http.delete(`${this.urlApi}/RESSOURCE-SERVICE/admin/ressources/${id}`)
  }
  public updateRessource(id:number,ressource:Ressource){
    return this.http.put(`${this.urlApi}/RESSOURCE-SERVICE/admin/ressources/${id}`,ressource)
  }

  public associate(idr:number,associatedto:AssociateDto){
    return this.http.put(`${this.urlApi}/RESSOURCE-SERVICE/admin/associate/${idr}`,associatedto)
  }
  public findById(id:number):Observable<Ressource>{
    return this.http.get<Ressource>(`${this.urlApi}/RESSOURCE-SERVICE/admin/find/${id}`)
  }


}
