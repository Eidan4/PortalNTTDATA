import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getClientData(docType: string, docNumber: string): Observable<any> {
    const url = `/api/clientes/${docType}/${docNumber}`; // Ruta relativa
    return this.http.get(url);
  }
}