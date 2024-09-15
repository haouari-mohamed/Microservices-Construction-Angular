import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource/ressource.service';
import { Ressource } from '../../model/Construction.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-resource-user',
  templateUrl: './resource-user.component.html',
  styleUrl: './resource-user.component.css'
})
export class ResourceUserComponent implements OnInit{
  constructor(private srv:RessourceService){}

  ResourceList!:Ressource[]
  dataSource = new MatTableDataSource<Ressource>();

  ngOnInit(): void {
    this.srv.showAll().subscribe((res:Ressource[])=>{
      this.ResourceList=res
      this.dataSource.data=this.ResourceList;
    })
    
  }
  displayedColumns: string[] = ['Name', 'Quantity', 'Picture', 'Info Fornisseur','Tache id'];



}
