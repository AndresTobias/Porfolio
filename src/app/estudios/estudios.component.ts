import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
listaDeEstudios:any;
loginSi:any;
  constructor(private datosPorfolio:DatosPorfolioService, private userService:UsersService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data)
      this.listaDeEstudios=data;
    });
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
  }

}
