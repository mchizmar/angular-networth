import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nw-useasset',
  templateUrl: './useasset.component.html',
  styleUrls: ['./useasset.component.css']
})
export class UseassetComponent implements OnInit {

  title:string = "Use Assets"; 
  total:number = 0; 
  formName:string = "cash-form";
  
  useAssetsFormGroup = this.fb.group({
    principleHome: [''],
    vacationHome: [''],
    motors: [''],
    homeFurnishings: [''],
    collectibles: [''],
    jewelry: [''],
    other: ['']
  }); 
  
  @Output() useAssetsTotalUpdate: EventEmitter<number> = new EventEmitter<number>(); 

  constructor(private fb :FormBuilder) { 

  }

  ngOnInit() {
    this.updateTotal(this.useAssetsFormGroup);
  }

  ngOnChanges(){
  }

  onValueChangeEvent(event:any){    
    this.total = this.updateTotal(this.useAssetsFormGroup);
    this.useAssetsTotalUpdate.emit(this.total); 
  }
   
  updateTotal(formGroup:FormGroup):number {
    let total = 0;
    Object.keys(formGroup.controls).forEach((key:string)=>{
      let control = formGroup.get(key);
      
      if(control instanceof FormGroup){
        total+=this.updateTotal(control);
      } else {
        total+= +control.value; 
      }
    });
    return total; 
  }

}