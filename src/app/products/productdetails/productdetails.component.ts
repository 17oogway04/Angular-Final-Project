import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candles } from 'src/app/products/models/candles';
import { CandleService } from 'src/app/products/services/candle.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{

  id: number = 0;

  currentCandle: Candles = new Candles()

  constructor(private candleService: CandleService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
      this.id = parseInt(routeId);
      this.candleService.getCandleByID(this.id).subscribe(foundCandle => {
          console.log(foundCandle);
          this.currentCandle = foundCandle;
      });
  }
}
