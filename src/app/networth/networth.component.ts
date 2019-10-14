import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nw-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.css']
})
export class NetworthComponent implements OnInit {

  title:String = "Personal Networth Calculator";
  totalNetworth:number = 0;
  totalAssets:number = 0;
  totalLiabilities = 0;

  constructor() { }

  ngOnInit() {
  }

  updateAssetsTotal(assetsTotal:number){
    this.totalAssets = assetsTotal;
    this.updateTotalNetworth();
  }

  updateLiabilitiesTotal(liabilitiesTotal:number){
     this.totalLiabilities = liabilitiesTotal;
     this.updateTotalNetworth();
   }

  updateTotalNetworth(){
    this.totalNetworth = (this.totalAssets - this.totalLiabilities);
  }

}
