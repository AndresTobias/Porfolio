import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from './AcercaDe';
import { Estudios } from './estudios';
import { PrincipalImg } from './pricipalImg';
import { PrincipalDato } from './principalDato';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {
  private apiUrl = 'http://localhost:5000/educacion'
  constructor(private http: HttpClient) { }
  // Todos los obtener <<--GET-->>
  obtenerDatosPrincipal(): Observable<any> {
    return this.http.get('http://localhost:5000/principalDato');
  }
  obtenerImgPrincipal(): Observable<any> {
    return this.http.get('http://localhost:5000/principalImg');
  }

  obtenerDatosEducacion(): Observable<any> {
    return this.http.get('http://localhost:5000/educacion');
  }
  obtenerDatosTrabajo(): Observable<any> {
    return this.http.get('http://localhost:5000/trabajo');
  }
  obtenerDatosAcercaDe(): Observable<any> {
    return this.http.get('http://localhost:5000/acercaDe');
  }





  // Todos los edid y agregar <<--POST-->>
  formAcercaDe(acercaDe: AcercaDe): Observable<AcercaDe> {
    return this.http.post<AcercaDe>('http://localhost:5000/acercaDe', acercaDe, httpOptions);
  }
  formPrincipalDato(principalDato: PrincipalDato): Observable<PrincipalDato> {
    return this.http.post<PrincipalDato>('http://localhost:5000/principalDato', principalDato, httpOptions);
  }
  formPrincipalImg(principalImg: PrincipalImg): Observable<PrincipalImg> {
    return this.http.post<PrincipalImg>('http://localhost:5000/principalImg', principalImg, httpOptions);
  }
  formEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.post<Estudios>('http://localhost:5000/educacion', estudios, httpOptions);
  }
  //borrarEstudio(estudios:Estudios): Observable<Estudios> {
  //  return this.http.delete<Estudios>( `${this.'http://localhost:5000/educacion'}/${estudios.id} ;
  //}
  deleteEstudio(estudio: Estudios): Observable<Estudios> {
    const url = `${this.apiUrl}/${estudio.id}`
    return this.http.delete<Estudios>(url)
  }
  editEstudio(estudios: Estudios): Observable<Estudios> {
    const url = `${this.apiUrl}/${estudios.id}`
    return this.http.put<Estudios>(url,estudios,httpOptions)
  }

}

