import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiary } from '../../models/beneficiary';

const baseURL = 'http://localhost:8000/api/beneficiarios';

@Injectable({
  providedIn: 'root'
})

export class BeneficiaryService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get<Beneficiary[]>(baseURL);
  }

  read(CI: Number): Observable<any> {
    return this.httpClient.get<Beneficiary>(`${baseURL}/${CI}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
}