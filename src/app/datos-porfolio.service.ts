import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from './AcercaDe';
import { Estudios } from './estudios';
import { PrincipalImg } from './pricipalImg';
import { PrincipalDato } from './principalDato';
import { Tortas } from './Torta';
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
  private apiUrlEst = 'http://localhost:8080/api/estudios/all'//'http://localhost:5000/educacion'
  private apiUrlTrab = 'http://localhost:8080/api/trabajos/all'//'http://localhost:5000/trabajo'
  private apiUrlAcercaDe='http://localhost:8080/api/acercaDe/all' //'http://localhost:5000/acercaDe'
  private apiUrlPrincipalDatos ='http://localhost:8080/api/personData/all'//'http://localhost:5000/principalDato'
  private apiUrlPrincipalImagenes ='http://localhost:8080/api/personImg/all'//'http://localhost:5000/principalImg'
  private apiUrlTortas = 'http://localhost:5000/tortas'//'http://localhost:8080/api/estudios/all'
  constructor(private http: HttpClient) { }


  //      <<Todo de acerca de>> 
  obtenerDatosAcercaDe(): Observable<any> {
    return this.http.get(this.apiUrlAcercaDe);
  }
  formAcercaDe(acercaDe: AcercaDe): Observable<AcercaDe> {
    return this.http.post<AcercaDe>('http://localhost:8080/api/acercaDe', acercaDe, httpOptions);
  
  }
  //      <<Fin de acerca de>>

  //      <<Todo de Principal>>
  obtenerDatosPrincipal(): Observable<any> {
    return this.http.get(this.apiUrlPrincipalDatos);
  }
  obtenerImgPrincipal(): Observable<any> {
    return this.http.get(this.apiUrlPrincipalImagenes);
  }
  formPrincipalDato(principalDato: PrincipalDato): Observable<PrincipalDato> {
    return this.http.post<PrincipalDato>('http://localhost:8080/api/personData', principalDato, httpOptions);
  }

  formPrincipalImg(principalImg: PrincipalImg): Observable<PrincipalImg> {
    return this.http.post<PrincipalImg>('http://localhost:8080/api/personImg', principalImg, httpOptions);
  }
  //      <<Fin de Principal>>  

  //      <<Todo de Educacion>> 
  obtenerDatosEducacion(): Observable<any> {
    return this.http.get(this.apiUrlEst);
  }
  formEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.post<Estudios>('http://localhost:8080/api/estudios', estudios, httpOptions);
  }
  editEstudio(estudio: Estudios): Observable<Estudios>{
    return this.http.post<Estudios>('http://localhost:8080/api/estudios', estudio, httpOptions);
  }
  deleteEstudio(estudio: Estudios): Observable<Estudios> {
    const url = `${'http://localhost:8080/api/estudios'}/${estudio.id}`
    return this.http.delete<Estudios>(url)
  }
  
  /*editEstudio(estudios: Estudios): Observable<Estudios> {
    const url = `${'http://localhost:8080/api/estudios'}/${estudios}`
    return this.http.put<Estudios>(url, estudios, httpOptions)
  }*/
  //      <<Fin de Educacion>>


  //      <<Todo de Trabajos>>
  obtenerDatosTrabajo(): Observable<any> {
    return this.http.get(this.apiUrlTrab);
  }
  formTrabajo(trabajo:Trabajo): Observable<Trabajo> {
    return this.http.post<Trabajo>('http://localhost:8080/api/trabajos', trabajo, httpOptions);
  }
  editTrabajo(trabajo:Trabajo): Observable<Trabajo> {
    return this.http.post<Trabajo>('http://localhost:8080/api/trabajos', trabajo, httpOptions);
  }
  deleteTrabajo(trabajo: Trabajo): Observable<Trabajo> {
    const url = `${'http://localhost:8080/api/trabajos'}/${trabajo.id}`
    return this.http.delete<Trabajo>(url)
  }
  //      <<Fin de Trabajos>>
//      <<Todo de Tortas>> 
obtenerDatosTortas(): Observable<any> {
  return this.http.get(this.apiUrlTortas);
}
editTorta(torta: Tortas): Observable<Tortas>{
  return this.http.post<Tortas>('http://localhost:5000/tortas', torta, httpOptions);
}
//      <<Fin de Tortas>>
}

