import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leader } from 'src/app/models/leader';

const baseURL = 'http://localhost:8000/api/dirigentes';

@Injectable({
  providedIn: 'root'
})

export class LeaderService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<Leader[]>(baseURL);
  }

  read(CI: Number): Observable<any> {
    return this.httpClient.get<Leader>(`${baseURL}/${CI}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}