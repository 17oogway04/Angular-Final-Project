import { Component } from '@angular/core';
import { Candles } from 'src/app/models/candles';
import { CandleService } from 'src/app/services/candle.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  productList: Candles[] = []

  constructor(private candleService: CandleService) {}

  ngOnInit(): void{
    this.candleService.getAllProducts().subscribe(foundProducts => {
      console.log(foundProducts);
      this.productList = foundProducts;
    })
  }
}
