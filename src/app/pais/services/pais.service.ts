import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  bucsarPais(termino: string): Observable<Country[]>{
    const url = `${this._apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url);
    /*.pipe(
      catchError(err => of([]))
    )*/
  }
}
