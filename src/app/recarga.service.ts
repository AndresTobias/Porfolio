import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {

  constructor() { }

  $recargar= new EventEmitter<any>();
}
