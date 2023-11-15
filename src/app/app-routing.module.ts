import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
