import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from './AcercaDe';
const httpOptions={
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {
//private apiUrl='http://localhost:5000/educacion'
  constructor(private http:HttpClient) { }
// Todos los obtener <<--GET-->>
  obtenerDatos():Observable<any>{
    return this.http.get('./assets/datos/data.json');
  }
  obtenerDatosEducacion():Observable<any>{
    return this.http.get('http://localhost:5000/educacion');
  }
  obtenerDatosTrabajo():Observable<any>{
    return this.http.get('http://localhost:5000/trabajo');
  }
  obtenerDatosAcercaDe():Observable<any>{
    return this.http.get('http://localhost:5000/acercaDe');
  }
  
  
  
  
  
  // Todos los edid y agregar <<--POST-->>
  formAcercaDe(acercaDe:AcercaDe): Observable<AcercaDe> {
    return this.http.post<AcercaDe>('http://localhost:5000/acercaDe',acercaDe,httpOptions);
  }
}
