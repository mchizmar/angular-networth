import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'nw-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  title:String = "Assets";
  total:number = 0;
  totalCash:number = 0;
  totalInvestments:number = 0;
  totalUseAssets:number = 0;

  @Output() assetsTotalUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  updateCashTotal(cashTotal:number){
    this.totalCash = cashTotal;
    this.updateTotal();
  }

  updateInvestmentsTotal(investmentsTotal:number){
   this.totalInvestments = investmentsTotal;
   this.updateTotal();
  }

  updateUseAssetsTotal(useAssetsTotal:number){
   this.totalUseAssets = useAssetsTotal;
   this.updateTotal();
  }

  updateTotal(){
    this.total = (this.totalCash+this.totalInvestments+this.totalUseAssets);
    this.assetsTotalUpdate.emit(this.total);
  }
}
