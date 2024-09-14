import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssociateDto, Tache } from '../../model/Construction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }

  urlApi="http://localhost:8888";

  public showtache(id:number):Observable<Tache[]>{
    return this.http.get<Tache[]>(`${this.urlApi}/TACHE-SERVICE/taches/${id}`)
  }
 
  public addTache(id:number,tache:Tache){
    return this.http.post(`${this.urlApi}/TACHE-SERVICE/admin/taches/${id}`,tache)
  }

  public deleteTache(id:number){
    return this.http.delete(`${this.urlApi}/TACHE-SERVICE/admin/taches/${id}`)
  }
  public updateTache(id:number,tache:Tache){
    return this.http.put(`${this.urlApi}/TACHE-SERVICE/admin/taches/${id}`,tache)
  }

  
  public findById(id:number):Observable<Tache>{
    return this.http.get<Tache>(`${this.urlApi}/TACHE-SERVICE/admin/taches/find/${id}`)
  }

  public assigneressource(idt:number,associateDto:AssociateDto){
    return this.http.put(`${this.urlApi}/TACHE-SERVICE/admin/assign/${idt}`,associateDto)
  }

}
