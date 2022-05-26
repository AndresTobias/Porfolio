import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { Trabajo } from '../Trabajo';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  listaDeTrabajos: any;
  loginSi: any;
  id?: number;
  empresa!: string;
  puesto!: string;
  logo!: string;
  lugar!: string;
  duracion!: number;
  ingreso!: number;
  egreso!: number;
  newdate: Trabajo[] = [];
  newdate1!: Trabajo;
  edit: boolean = false;
  add: boolean = false;
  idX!: number;
  constructor(private datosPorfolio: DatosPorfolioService, private userService: UsersService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosTrabajo().subscribe(data => {
      console.log(data)
      this.listaDeTrabajos = data;
    });
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
  }
  onSubmit() {
    if (!this.puesto || !this.ingreso || !this.empresa) {
      alert("text en 0");
    }

    var { empresa, puesto, logo, lugar, duracion, ingreso, egreso, id } = this
    var nowdate = { empresa, puesto, logo, lugar, duracion, ingreso, egreso, id }

    if (this.add) {
      this.datosPorfolio.formTrabajo(nowdate).subscribe((nowdate) => this.newdate.push(nowdate));
    }
    if (this.edit) {
      nowdate.id = this.idX;
      console.log(nowdate);
      this.datosPorfolio.editTrabajo(nowdate).subscribe(() => { this.ngOnInit() });
    }
  }
  trabajox(id: number) {
    this.idX = id;
    this.edit = !this.edit;
    console.log(this.idX);
  }
  mostrar_formulario() {
    this.edit = !this.edit;
    this.ngOnInit();
  }
  cerrar_formulario() {
    if (this.add) {
      this.add = !this.add;
    }
    if (this.edit) {
      this.edit = !this.edit;
    }
    this.ngOnInit();
  }
  mostrar_formularioadd() {
    this.add = !this.add;
    this.ngOnInit();
  }
  deleteEstudio(trabajo: Trabajo) {
    this.datosPorfolio.deleteTrabajo(trabajo)
      .subscribe(() => { this.ngOnInit() });
  }


} 
