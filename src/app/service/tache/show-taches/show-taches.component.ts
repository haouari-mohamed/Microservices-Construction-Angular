import { Component, OnInit } from '@angular/core';
import { TacheService } from '../tache.service';
import { Tache } from '../../../model/Construction.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-taches',
  templateUrl: './show-taches.component.html',
  styleUrl: './show-taches.component.css'
})
export class ShowTachesComponent implements OnInit {

  listTache! : Tache[]
  id! : any

  constructor(private srv: TacheService , private router: ActivatedRoute){ }

  dataSource = new MatTableDataSource<Tache>();

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')

    this.srv.showtache(this.id).subscribe((res :Tache[] ) => {
      this.listTache = res
      this.dataSource.data=this.listTache;

    } )
  }
  displayedColumns: string[] = [ 'Description', 'Date Creation', 'Date Fin','Status','Delete','Update','Resources'];

  deleteTache(id:number){
    this.srv.deleteTache(id).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
