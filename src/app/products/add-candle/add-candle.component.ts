import { Component } from '@angular/core';
import { Candles } from '../models/candles';
import { CandleService } from '../services/candle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-candle',
  templateUrl: './add-candle.component.html',
  styleUrls: ['./add-candle.component.css']
})
export class AddCandleComponent {

  newCandle: Candles = new Candles();

  constructor(private candleService: CandleService, private router: Router){}

  onSubmit(){
    this.candleService.createNewProduct(this.newCandle).subscribe(response =>{
      this.router.navigateByUrl("/products")
    })
  }
}
