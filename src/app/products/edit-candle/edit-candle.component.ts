import { Component, OnInit } from '@angular/core';
import { Candles } from '../models/candles';
import { CandleService } from '../services/candle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-candle',
  templateUrl: './edit-candle.component.html',
  styleUrls: ['./edit-candle.component.css']
})
export class EditCandleComponent {

  id: number = 0;

  currentCandle: Candles = new Candles()

  constructor(private candleService: CandleService, private actRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.candleService.getCandleByID(this.id).subscribe(foundCandle => {
      this.currentCandle = foundCandle;
    })
  }

  onSubmit(){
    this.candleService.editCandleByID(this.id, this.currentCandle). subscribe(edittedCandle => {
      this.router.navigateByUrl("/products");
    })
  }

}
