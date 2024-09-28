import { Component, OnInit } from '@angular/core';
import { Projet } from '../../model/Construction.model';
import { ProjetService } from '../../service/projet/projet.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-projet-user',
  templateUrl: './projet-user.component.html',
  styleUrl: './projet-user.component.css'
})
export class ProjetUserComponent implements OnInit{
  ngOnInit(): void {
    
  }
  /* TableProjet!:Projet[]
  pageIndex = 0;

  constructor(private srv:ProjetService){}
  dataSource = new MatTableDataSource<Projet>();

  ngOnInit(): void {
    this.srv.findAll(this.pageIndex).subscribe((res:Projet[])=>{
      this.TableProjet=res
      this.dataSource.data=this.TableProjet;

    })
    
  }
  displayedColumns: string[] = ['Name', 'Description', 'Date Creation', 'Date Fin','Budget','Taches'];
 */
}
