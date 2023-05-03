import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from './list';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  get(): Observable<Array<List>> {
    return this.http.get<Array<List>>('./assets/json/list.json');
  }
}
