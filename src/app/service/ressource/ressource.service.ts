import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateRessourceDTO, Ressource } from '../../model/Construction.model';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {


  constructor(private http:HttpClient) { }

  urlApi="http://localhost:8888";

  public showAll(){
    return this.http.get(`${this.urlApi}/ressources`)
  }
  public findRessourceTache(id:number){
    return this.http.get(`${this.urlApi}/ressources/${id}`)
  }
  public addRessource(ressource:Ressource){
    return this.http.post(`${this.urlApi}/admin/ressources`,ressource)
  }

  public deleteRessource(id:number){
    return this.http.delete(`${this.urlApi}/admin/ressources/${id}`)
  }
  public updateRessource(id:number,ressource:Ressource){
    return this.http.put(`${this.urlApi}/admin/ressources/${id}`,ressource)
  }

  public associate(id:number,associatedto:AssociateRessourceDTO){
    return this.http.put(`${this.urlApi}/admin/ressources/associate/${id}`,associatedto)
  }


}
