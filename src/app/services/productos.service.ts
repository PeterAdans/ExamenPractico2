import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Root } from '../interfaces/root';
import { Observable } from 'rxjs';
import { IPrducts } from '../interfaces/iprducts';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/products';


  constructor() { }




  getAllWithObservables(): Observable<Root> {
    return this.httpClient.get<Root>(this.baseUrl);
  }

  getById(_id: string): Observable<IPrducts> {
    return this.httpClient.get<IPrducts>(`${this.baseUrl}/${_id}`)
  }





}
