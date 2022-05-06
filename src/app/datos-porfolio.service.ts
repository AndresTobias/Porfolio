import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from './AcercaDe';
import { Estudios } from './estudios';
import { PrincipalImg } from './pricipalImg';
import { PrincipalDato } from './principalDato';
import { Trabajo } from './Trabajo';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DatosPorfolioService {
  private apiUrlEst = 'http://localhost:5000/educacion'
  private apiUrlTrab = 'http://localhost:5000/trabajo'
  constructor(private http: HttpClient) { }


  //      <<Todo de acerca de>> 
  obtenerDatosAcercaDe(): Observable<any> {
    return this.http.get('http://localhost:5000/acercaDe');
  }
  formAcercaDe(acercaDe: AcercaDe): Observable<AcercaDe> {
    return this.http.post<AcercaDe>('http://localhost:5000/acercaDe', acercaDe, httpOptions);
  }
  //      <<Fin de acerca de>>

  //      <<Todo de Principal>>
  obtenerDatosPrincipal(): Observable<any> {
    return this.http.get('http://localhost:5000/principalDato');
  }
  obtenerImgPrincipal(): Observable<any> {
    return this.http.get('http://localhost:5000/principalImg');
  }
  formPrincipalDato(principalDato: PrincipalDato): Observable<PrincipalDato> {
    return this.http.post<PrincipalDato>('http://localhost:5000/principalDato', principalDato, httpOptions);
  }

  formPrincipalImg(principalImg: PrincipalImg): Observable<PrincipalImg> {
    return this.http.post<PrincipalImg>('http://localhost:5000/principalImg', principalImg, httpOptions);
  }
  //      <<Fin de Principal>>  

  //      <<Todo de Educacion>> 
  obtenerDatosEducacion(): Observable<any> {
    return this.http.get(this.apiUrlEst);
  }
  formEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.post<Estudios>(this.apiUrlEst, estudios, httpOptions);
  }
  deleteEstudio(estudio: Estudios): Observable<Estudios> {
    const url = `${this.apiUrlEst}/${estudio.id}`
    return this.http.delete<Estudios>(url)
  }
  editEstudio(estudios: Estudios): Observable<Estudios> {
    const url = `${this.apiUrlEst}/${estudios.id}`
    return this.http.put<Estudios>(url, estudios, httpOptions)
  }
  //      <<Fin de Educacion>>


  //      <<Todo de Trabajos>>
  obtenerDatosTrabajo(): Observable<any> {
    return this.http.get(this.apiUrlTrab);
  }
  formTrabajo(trabajo:Trabajo): Observable<Trabajo> {
    return this.http.post<Trabajo>(this.apiUrlTrab, trabajo, httpOptions);
  }
  editTrabajo(trabajo:Trabajo): Observable<Trabajo> {
    const url = `${this.apiUrlTrab}/${trabajo.id}`
    return this.http.put<Trabajo>(url, trabajo, httpOptions)
  }
  deleteTrabajo(trabajo: Trabajo): Observable<Trabajo> {
    const url = `${this.apiUrlTrab}/${trabajo.id}`
    return this.http.delete<Trabajo>(url)
  }
  //      <<Fin de Trabajos>>


}

