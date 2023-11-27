import { Component } from '@angular/core';
import { Candles } from 'src/app/products/models/candles';
import { CandleService } from 'src/app/products/services/candle.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

 candleList: Candles[] = [];

  constructor(private candleService: CandleService) {}

  ngOnInit(): void{
    this.loadCandles();
  }

  loadCandles() {
    this.candleService.getAllProducts().subscribe(foundCandles => {
      console.log(foundCandles);
      this.candleList = foundCandles;
    })
  }

  onDelete(id: number){
    this.candleService.deleteCandleByID(id).subscribe(response => {
        console.log(response);
       this.loadCandles();
    });
}

  SortCandles(){
    this.candleService.sortCandlesByPrice().subscribe(response => {
      this.candleList = response;
    })
  }

  SortCandles2040(){
    this.candleService.sortCandlesByPrice20_40().subscribe(response => {
      this.candleList = response;
    })
  }

  sortCandlesHighToLow(){
    this.candleService.sortCandlesHighToLow().subscribe(response => {
      this.candleList = response;
    })
  }

  sortCandlesLowToHigh(){
    this.candleService.sortCandlesLowToHigh().subscribe(response => {
      this.candleList = response;
    })
  }

  
}
