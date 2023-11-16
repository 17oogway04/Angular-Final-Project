import { Component } from '@angular/core';
import { Candles } from 'src/app/models/candles';
import { CandleService } from 'src/app/services/candle.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

 candleList: Candles[] = []

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
}
