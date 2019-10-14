import { Component, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nw-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit, OnChanges {
 
  title:string = "Cash and Equivalents"; 
  total:number = 0; 
  formName:string = "cash-form";
  
  cashFormGroup = this.fb.group({
    checking: [''],
    savings: [''],
    moneymarket: [''],
    bonds: [''],
    cd: [''],
    lifeinsurance: ['']
  }); 

  @Output() cashTotalUpdate: EventEmitter<number> = new EventEmitter<number>(); 

  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.updateTotal(this.cashFormGroup);
  }

  ngOnChanges(){
  }

  onValueChangeEvent(event:any){    
    this.total = this.updateTotal(this.cashFormGroup);
    this.cashTotalUpdate.emit(this.total); 
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