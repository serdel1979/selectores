import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //https://restcountries.com/v3.1/region/{region}
  //Africa, Americas, Asia, Europe, Oceania


  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


  constructor(private http: HttpClient) { }

  get regiones(): string[] {
    return [...this._regiones];
  }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}`;
    return this.http.get<PaisSmall[]>(url);
  }


  getPaisPorCodigo(codigo: string): Observable<Pais[] | null> {

    if (!codigo) {
      return of([])
    }

    const url = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais[]>(url);
  }

  getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall[] | null> {
    const url = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<PaisSmall[]>(url);
  }





}
