import { Component, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource/ressource.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ressource } from '../../model/Construction.model';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrl: './add-resource.component.css'
})
export class AddResourceComponent implements OnInit{
  ResourceForm!:FormGroup

  constructor(private srv:RessourceService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.ResourceForm=this.fb.group({
      name:'',
      quantity: '',
      picture:'' ,
      infoFornisseur: '',
      
    })
    
  }

  SubmitResource(){
    const resource:Ressource={
      id: 0,
      name: this.ResourceForm.value.name,
      quantity: this.ResourceForm.value.quantity,
      picture: this.ResourceForm.value.picture,
      infoFornisseur: this.ResourceForm.value.infoFornisseur,
      tacheId: ""
    }
    this.srv.addRessource(resource).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
