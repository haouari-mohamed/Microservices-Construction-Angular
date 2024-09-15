import { Component, OnInit } from '@angular/core';
import { Tache } from '../../model/Construction.model';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from '../../service/tache/tache.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tache-user',
  templateUrl: './tache-user.component.html',
  styleUrl: './tache-user.component.css'
})
export class TacheUserComponent implements OnInit{
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

  
  displayedColumns: string[] = [ 'Description', 'Date Creation', 'Date Fin','Status','Resources'];


}
