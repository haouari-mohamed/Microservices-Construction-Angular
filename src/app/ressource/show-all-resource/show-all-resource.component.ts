import { Component, OnInit } from '@angular/core';
import { Ressource } from '../../model/Construction.model';
import { ResourceTacheComponent } from '../resource-tache/resource-tache.component';
import { RessourceService } from '../../service/ressource/ressource.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-all-resource',
  templateUrl: './show-all-resource.component.html',
  styleUrl: './show-all-resource.component.css'
})
export class ShowAllResourceComponent implements OnInit{

  constructor(private srv:RessourceService){}

  ResourceList!:Ressource[]
  dataSource = new MatTableDataSource<Ressource>();

  ngOnInit(): void {
    this.srv.showAll().subscribe((res:Ressource[])=>{
      this.ResourceList=res
      this.dataSource.data=this.ResourceList;
    })
    
  }
  displayedColumns: string[] = ['Name', 'Quantity', 'Picture', 'Info Fornisseur','Tache id','Delete','Update'];

  deleteResource(id:number){
    this.srv.deleteRessource(id).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
