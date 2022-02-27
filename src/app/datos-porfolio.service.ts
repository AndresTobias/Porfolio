import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {
//private apiUrl='http://localhost:5000/educacion'
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/datos/data.json');
  }
  obtenerDatosEducacion():Observable<any>{
    return this.http.get('http://localhost:5000/educacion');
  }
  obtenerDatosTrabajo():Observable<any>{
    return this.http.get('http://localhost:5000/trabajo');
  }

}
