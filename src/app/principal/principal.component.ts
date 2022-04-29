import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { RecargaService } from '../recarga.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PrincipalComponent implements OnInit {
miPorfolio:any;
loginSi:any;
  constructor(private datosPorfolio:DatosPorfolioService, private userService:UsersService, private ref:RecargaService) { }

  ngOnInit(): void {
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
    this.ref.$recargar.subscribe((valor)=>{this.loginSi=valor});
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
  }

}
