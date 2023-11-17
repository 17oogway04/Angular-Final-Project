import { Router, RouterModule, Routes } from "@angular/router";
import { ProductlistComponent } from "./productlist/productlist.component";
import { AddCandleComponent } from "./add-candle/add-candle.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { EditCandleComponent } from "./edit-candle/edit-candle.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: "", component: ProductlistComponent },
    { path: "products", component: ProductlistComponent },
    { path: "add", component: AddCandleComponent},
    { path: ":id", component: ProductdetailsComponent },
    { path: "edit/:id", component: EditCandleComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}