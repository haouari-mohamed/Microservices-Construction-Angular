import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssociateDto, Ressource } from '../../model/Construction.model';
import { TacheService } from '../../service/tache/tache.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RessourceService } from '../../service/ressource/ressource.service';

@Component({
  selector: 'app-assign-ressource',
  templateUrl: './assign-ressource.component.html',
  styleUrl: './assign-ressource.component.css'
})
export class AssignRessourceComponent implements OnInit{
  idT:any
  RessourceForm!:FormGroup
  listRessource!:Ressource[]

  constructor(private srv:TacheService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router,private srvr:RessourceService){}
  ngOnInit(): void {
    this.idT=this.route.snapshot.paramMap.get('id')
    this.RessourceForm=this.fb.group({
      idRessource:''
    })
    this.srvr.showAll().subscribe((res: Ressource[]) => {
      this.listRessource = res;
    });
  }

  Assign(){
    const ressourceDto:AssociateDto={
      idRessource: this.RessourceForm.value.idRessource
    }
    this.srv.assigneressource(this.idT,ressourceDto).subscribe(()=>{
      this.ngOnInit()

    })
  }

}
