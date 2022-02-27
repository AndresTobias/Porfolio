import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
listaDeEstudios:any;
  constructor(private datosPorfolio:DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data)
      this.listaDeEstudios=data;
    });
  }

}
