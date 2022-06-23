import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborator } from 'src/app/models/collaborator';

const baseURL = 'http://localhost:8000/api/colaboradores';

@Injectable({
  providedIn: 'root'
})

export class CollaboratorService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<Collaborator[]>(baseURL);
  }

  read(CI: Number): Observable<any> {
    return this.httpClient.get<Collaborator>(`${baseURL}/${CI}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}