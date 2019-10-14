import { Component, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nw-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit, OnChanges {

  title:string = "Current and Long-Term";
  total:number = 0;
  formName:string = "current-form";

  currentFormGroup = this.fb.group({
    creditCardBalance:[''],
    estimatedIncomeTax:[''],
    otherBills:[''],
    homeMortgage:[''],
    homeEquityLoan:[''],
    rentalMortgage:[''],
    carLoans:[''],
    studentLoans:[''],
    lifeInsurance:[''],
    otherLongTerm: ['']
  });

  @Output() currentTotalUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb:FormBuilder) {
  }

  ngOnInit() {
     this.updateTotal(this.currentFormGroup);
  }

  ngOnChanges(){
  }

  onValueChangeEvent(event:any){
    this.total = this.updateTotal(this.currentFormGroup);
    this.currentTotalUpdate.emit(this.total);
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
