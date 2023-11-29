import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candles } from '../models/candles';

@Injectable({
  providedIn: 'root'
})
export class CandleService {
  datasource: string = 'http://localhost:3000/candles'

  constructor(private http: HttpClient) { }

  //CRUD methods
  getAllProducts(): Observable<Candles[]> {
    return this.http.get<Candles[]>(this.datasource);
  }

  getCandleByID(id: number): Observable<Candles> {
    return this.http.get<Candles>(this.datasource + "/" + id);
  }
  createNewProduct(newCandle: Candles): Observable<Candles> {
    return this.http.post<Candles>(this.datasource, newCandle);
  }
  editCandleByID(id: number, edittedCandle: Candles): Observable<Candles> {
    return this.http.put<Candles>(this.datasource + "/" + id, edittedCandle);
  }

  deleteCandleByID(id: number): Observable<any> {
    return this.http.delete<any>(this.datasource + "/" + id)
  }

  //FEATURES
  sortCandlesByPrice(): Observable<Candles[]> {
    return this.http.get<Candles[]>(`${this.datasource}?price_gte=0&price_lte=20`);
  }
  sortCandlesByPrice20_40(): Observable<Candles[]> {
    return this.http.get<Candles[]>(`${this.datasource}?price_gte=20&price_lte=40`);
  }

  sortCandlesHighToLow(): Observable<Candles[]> {
    return this.http.get<Candles[]>(`${this.datasource}?_sort=price&_order=desc`);
  }

  sortCandlesLowToHigh(): Observable<Candles[]> {
    return this.http.get<Candles[]>(`${this.datasource}?_sort=price&_order=asc`);
  }

 
 



}
