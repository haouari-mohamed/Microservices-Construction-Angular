import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../service/tache/tache.service';
import { Tache } from '../../model/Construction.model';
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
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;

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
