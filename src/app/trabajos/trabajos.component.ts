import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
listaDeTrabajos:any;
  constructor(private datosPorfolio:DatosPorfolioService) { }

  ngOnInit():  void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data.educacion)
      this.listaDeTrabajos=data.trabajo;
    });
  }

} 
