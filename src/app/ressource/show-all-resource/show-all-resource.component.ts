import { Component, OnInit } from '@angular/core';
import { Ressource } from '../../model/Construction.model';
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
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;
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
  getPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.ngOnInit();
    }
  }

}
