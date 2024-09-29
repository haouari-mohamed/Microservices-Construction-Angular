import { Component, OnInit } from '@angular/core';
import { Tache } from '../../model/Construction.model';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from '../../service/tache/tache.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tache-user',
  templateUrl: './tache-user.component.html',
  styleUrls: ['./tache-user.component.css'] 
})
export class TacheUserComponent implements OnInit {
  listTache!: Tache[];
  id!: any;
  description: string = ''; 
  dataSource = new MatTableDataSource<Tache>();
  
 
  displayedColumns: string[] = ['Description', 'Date Creation', 'Date Fin', 'Status', 'Resources'];

  constructor(private srv: TacheService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.loadTaches(); 
  }

  loadTaches(): void {
    this.srv.showTacheWithFilter(this.id, this.description).subscribe((res: Tache[]) => {
      this.listTache = res;
      this.dataSource.data = this.listTache;
    });
  }

  onFilterChange(): void {
    this.loadTaches(); 
  }
}
