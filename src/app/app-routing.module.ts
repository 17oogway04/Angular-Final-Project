import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'product/:id', component: ProductdetailsComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
