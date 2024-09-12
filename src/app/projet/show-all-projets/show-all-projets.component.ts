import { Component } from '@angular/core';
import { Projet } from '../../model/Construction.model';
import { ProjetService } from '../../service/projet/projet.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-all-projets',
  templateUrl: './show-all-projets.component.html',
  styleUrl: './show-all-projets.component.css'
})
export class ShowAllProjetsComponent {
  TableProjet!:Projet[]

  constructor(private srv:ProjetService){}
  dataSource = new MatTableDataSource<Projet>();

  ngOnInit(): void {
    this.srv.findAll().subscribe((res:Projet[])=>{
      this.TableProjet=res
      this.dataSource.data=this.TableProjet;

    })
    
  }
  displayedColumns: string[] = ['Name', 'Description', 'Date Creation', 'Date Fin','Budget','Delete','Update'];
  
  deleteProjet(id:number){
    this.srv.deleteProjet(id).subscribe(()=>{
      this.ngOnInit()
    })
  }

}

