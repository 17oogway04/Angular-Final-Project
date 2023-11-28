import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AddCandleComponent } from './add-candle/add-candle.component';
import { EditCandleComponent } from './edit-candle/edit-candle.component';
import { CandleService } from './services/candle.service';
import { ProductRoutingModule } from './products-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




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
    FormsModule,
    MatRadioModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [CandleService]
})
export class ProductsModule { }
