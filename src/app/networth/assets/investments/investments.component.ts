import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nw-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit, OnChanges {
  
  title:string = "Invested Assets"; 
  total:number = 0; 
  formName:string = "investments-form";
  
  investmentsFormGroup = this.fb.group({
    taxableAccounts: this.fb.group({
      brokerage:[''], 
      otherBrokerage: ['']
    }), 
    retirementAccounts: this.fb.group({
      ira:[''],
      rothIra:[''],
      work401Or403:[''],
      sepIra:[''],
      otherPlans:[''],
      pension:[''],
      annuity:['']
    }),
    businessOwnership: this.fb.group({
      realEstate:[''],
      soleProprietorship:[''],
      partnership:[''],
      cCorporation:[''],
      sCorporation:[''],
      llc:[''],
      otherBusiness:['']
    })
  }); 
  
  @Output() investmentsTotalUpdate: EventEmitter<number> = new EventEmitter<number>(); 

  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.updateTotal(this.investmentsFormGroup);
  }

  ngOnChanges(){
  }

  onValueChangeEvent(event:any){    
    this.total = this.updateTotal(this.investmentsFormGroup);
    this.investmentsTotalUpdate.emit(this.total); 
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