import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'nw-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.css']
})
export class LiabilitiesComponent implements OnInit {

  title:String = "Liabilities";
  totalCurrent:number = 0;
  total:number = 0;

  @Output() liabilitiesTotalUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  updateCurrentTotal(currentTotal:number){
    this.totalCurrent = currentTotal;
    this.updateTotal();
  }

  updateTotal(){
    this.total = this.totalCurrent;
    this.liabilitiesTotalUpdate.emit(this.total);
  }
}
