import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
miPorfolio:any;
loginSi:any;
  constructor(private datosPorfolio:DatosPorfolioService, private userService:UsersService) { }

  ngOnInit(): void {
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

}
