import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { lastValueFrom, Observable } from 'rxjs';
import { Root } from '../interfaces/root';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/users';

  constructor() { }


  getAllWithObservables(): Observable<Root> {
    return this.httpClient.get<Root>(this.baseUrl);
  }



  getById(_id: string): Observable<Iuser> {
    return this.httpClient.get<Iuser>(`${this.baseUrl}/${_id}`)
  }

  insert(user: Iuser) :Observable<Iuser> {
    return this.httpClient.post<Iuser>(this.baseUrl, user)
  }

  update(user: Iuser): Observable<Iuser> {
    return this.httpClient.put<Iuser>(this.baseUrl+"/"+user._id, user);
  }

  delete(_id: string): Observable<Iuser> {
    return this.httpClient.delete<Iuser>(`${this.baseUrl}/${_id}`);

  }
  
    
  }











