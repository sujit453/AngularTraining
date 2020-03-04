import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients = ():Observable<any>=>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
