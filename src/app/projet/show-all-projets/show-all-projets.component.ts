import { Component, ViewChild } from '@angular/core';
import { Projet } from '../../model/Construction.model';
import { ProjetService } from '../../service/projet/projet.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-show-all-projets',
  templateUrl: './show-all-projets.component.html',
  styleUrl: './show-all-projets.component.css'
})
export class ShowAllProjetsComponent {
 /*  projets: Projet[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;

  displayedColumns: string[] = ['Id', 'Name', 'Description', 'Date Creation', 'Date Fin', 'Budget', 'Delete', 'Update', 'Taches'];

  constructor(private projetService: ProjetService) {}

  ngOnInit() {
    this.loadProjets();
  }

  loadProjets() {
    this.projetService.findAll(this.currentPage - 1, this.itemsPerPage).subscribe((response: any) => {
      this.projets = response.content;
      this.totalItems = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadProjets();
  }

  deleteProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.loadProjets();
    });
  }

  getPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }

 */
  projets: Projet[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;

  displayedColumns: string[] = ['id', 'name', 'description', 'dateCreation', 'dateFin', 'budget', 'actions'];

  constructor(private projetService: ProjetService) {}

  ngOnInit() {
    this.loadProjets();
  }

  loadProjets() {
    this.projetService.findAll(this.currentPage - 1, this.itemsPerPage).subscribe((response: any) => {
      this.projets = response.content;
      this.totalItems = response.totalElements;
      this.totalPages = response.totalPages;
    });
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProjets();
    }
  }

  deleteProjet(id: number) {
    this.projetService.deleteProjet(id).subscribe(() => {
      this.loadProjets();
    });
  }

  getPagesArray(): number[] {
    return Array.from({length: this.totalPages}, (_, i) => i + 1);
  }
}

