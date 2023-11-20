import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddCandleComponent } from './add-candle/add-candle.component';
import { EditCandleComponent } from './edit-candle/edit-candle.component';
import { CandleService } from './services/candle.service';
import { ProductRoutingModule } from './products-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductlistComponent,
    ProductdetailsComponent,
    AddCandleComponent,
    EditCandleComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatSidenavModule,
 FormsModule 
  ],
  providers: [CandleService]
})
export class ProductsModule { }
