import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //https://restcountries.com/v3.1/region/{region}
  //Africa, Americas, Asia, Europe, Oceania


  private baseUrl:string = 'https://restcountries.com/v3.1';

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


  constructor(private http: HttpClient) { }

  get regiones():string[]{
    return [...this._regiones];
  }

  getPaisesPorRegion(region:string):Observable<PaisSmall[]>{
    const url: string = `${this.baseUrl}/region/${region}`;
    return this.http.get<PaisSmall[]>(url);
  }


}
