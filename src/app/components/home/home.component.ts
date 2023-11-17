import { Component } from '@angular/core';
import { Candles } from 'src/app/products/models/candles';
import { CandleService } from 'src/app/products/services/candle.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

}
