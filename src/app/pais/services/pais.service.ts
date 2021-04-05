import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
//import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiURL: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;flag;population;alpha2Code');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this._apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
    /*.pipe(
      catchError(err => of([]))
    )*/
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url= `${this._apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }

  buscarDetalles(id: string): Observable<Country>{
    const url = `${this._apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{
    const url = `${this._apiURL}/region/${region}`;
    return this.http.get<Country[]>(url, { params : this.httpParams });
  }
}
