import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //https://restcountries.com/v3.1/region/{region}
  //Africa, Americas, Asia, Europe, Oceania

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


  constructor() { }

  get regiones():string[]{
    return [...this._regiones];
  }



}
