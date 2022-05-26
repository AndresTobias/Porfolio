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
  private apiUrlEst = 'https://api-para-porfolio.herokuapp.com/api/estudios/all'//'http://localhost:8080/api/estudios/all'//'http://localhost:5000/educacion'
  private apiUrlTrab = 'https://api-para-porfolio.herokuapp.com/api/trabajos/all'//'http://localhost:8080/api/trabajos/all'//'http://localhost:5000/trabajo'
  private apiUrlAcercaDe='https://api-para-porfolio.herokuapp.com/api/acercaDe/all'//'http://localhost:8080/api/acercaDe/all' //'http://localhost:5000/acercaDe'
  private apiUrlPrincipalDatos ='https://api-para-porfolio.herokuapp.com/api/personData/all'//'http://localhost:8080/api/personData/all'//'http://localhost:5000/principalDato'
  private apiUrlPrincipalImagenes ='https://api-para-porfolio.herokuapp.com/api/personImg/all'//'http://localhost:8080/api/personImg/all'//'http://localhost:5000/principalImg'
  private apiUrlTortas ='https://api-para-porfolio.herokuapp.com/api/tortas/all'//'http://localhost:8080/api/tortas/all'// 'http://localhost:5000/tortas'//'http://localhost:8080/api/estudios/all'
  constructor(private http: HttpClient) { }


  //      <<Todo de acerca de>> 
  obtenerDatosAcercaDe(): Observable<any> {
    return this.http.get(this.apiUrlAcercaDe);
  }
  formAcercaDe(acercaDe: AcercaDe): Observable<AcercaDe> {
    return this.http.post<AcercaDe>('https://api-para-porfolio.herokuapp.com/api/acercaDe', acercaDe, httpOptions);
  
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
    return this.http.post<PrincipalDato>('https://api-para-porfolio.herokuapp.com/api/personData', principalDato, httpOptions);
  }

  formPrincipalImg(principalImg: PrincipalImg): Observable<PrincipalImg> {
    return this.http.post<PrincipalImg>('https://api-para-porfolio.herokuapp.com/api/personImg', principalImg, httpOptions);
  }
  //      <<Fin de Principal>>  

  //      <<Todo de Educacion>> 
  obtenerDatosEducacion(): Observable<any> {
    return this.http.get(this.apiUrlEst);
  }
  formEstudios(estudios: Estudios): Observable<Estudios> {
    return this.http.post<Estudios>('https://api-para-porfolio.herokuapp.com/api/estudios', estudios, httpOptions);
  }
  editEstudio(estudio: Estudios): Observable<Estudios>{
    return this.http.post<Estudios>('https://api-para-porfolio.herokuapp.com/api/estudios', estudio, httpOptions);
  }
  deleteEstudio(estudio: Estudios): Observable<Estudios> {
    const url = `${'https://api-para-porfolio.herokuapp.com/api/estudios'}/${estudio.id}`
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
    return this.http.post<Trabajo>('https://api-para-porfolio.herokuapp.com/api/trabajos', trabajo, httpOptions);
  }
  editTrabajo(trabajo:Trabajo): Observable<Trabajo> {
    return this.http.post<Trabajo>('https://api-para-porfolio.herokuapp.com/api/trabajos', trabajo, httpOptions);
  }
  deleteTrabajo(trabajo: Trabajo): Observable<Trabajo> {
    const url = `${'https://api-para-porfolio.herokuapp.com/api/trabajos'}/${trabajo.id}`
    return this.http.delete<Trabajo>(url)
  }
  //      <<Fin de Trabajos>>
//      <<Todo de Tortas>> 

obtenerDatosTortas(): Observable<any> {
  return this.http.get(this.apiUrlTortas);
}

editTorta(torta: Tortas): Observable<Tortas>{
  return this.http.post<Tortas>('https://api-para-porfolio.herokuapp.com/api/tortas', torta, httpOptions);
}
//      <<Fin de Tortas>>
}

