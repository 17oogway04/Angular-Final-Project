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

  getAllProducts(): Observable<Candles[]> {
    return this.http.get<Candles[]>(this.datasource);
  }
  createNewProduct(newCandle: Candles): Observable<Candles> {
    return this.http.post<Candles>(this.datasource, newCandle);
  }

  editCandleByID(id: number, edittedCandle: Candles): Observable<Candles> {
    return this.http.put<Candles>(this.datasource + "/" + id, edittedCandle);
  }

  deleteCandleByID(id: number): Observable<any>{
    return this.http.delete<any>(this.datasource + "/" + id)
  }
}
