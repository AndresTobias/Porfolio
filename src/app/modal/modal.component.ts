import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecargaService } from '../recarga.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() items!: Observable<number>;
  counter = 0;
  dato:any;
  constructor(private ref:RecargaService,) { }

refresh(): void { window.location.reload(); }
  
  ngOnInit(): void {
    this.ref.$recargar.subscribe((valor)=>{this.dato=valor});
  }
}


