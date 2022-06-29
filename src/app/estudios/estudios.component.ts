import { Component, OnInit, ElementRef} from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { Estudios } from '../estudios';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  listaDeEstudios: any;
  loginSi: any;
  id?: number;
  institucion!: string;
  titulo!: string;
  logo!: string;
  carrera!: string;
  duracion!: number;
  ingreso!: number;
  egreso!: number;

  institucione!: string;
  tituloe!: string;
  logoe!: string;
  carrerae!: string;
  duracione!: number;
  ingresoe!: number;
  egresoe!: number;

  newdate: Estudios[] = [];
  newdate1!: Estudios;
  edit: boolean = false;
  add: boolean = false;
  idX!: number;
  constructor(private datosPorfolio: DatosPorfolioService, private userService: UsersService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data => {
      console.log(data)
      this.listaDeEstudios = data;
    });
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
  }

  onSubmit() {
    if (!this.titulo || !this.institucion || !this.logo) {
      alert("text en 0");
    }

    var { institucion, titulo, logo, carrera, duracion, ingreso, egreso, id } = this
    var nowdate = { institucion, titulo, logo, carrera, duracion, ingreso, egreso, id }

    if (this.add) {
      this.datosPorfolio.formEstudios(nowdate).subscribe((nowdate) => this.newdate.push(nowdate));
    }
    if (this.edit) {
      nowdate.id = this.idX;
      console.log(nowdate);
      this.datosPorfolio.editEstudio(nowdate).subscribe(() => { this.ngOnInit() });
    }
  }
  //onSubmit1()
  //{
  //  if(!this.titulo||!this.institucion||!this.logo)
  //  {
  //    alert("text en 0");
  //  }
  //
  //let{institucion,titulo,logo,carrera,duracion,ingreso,egreso,id}=this
  //let nowdate1={institucion,titulo,logo,carrera,duracion,ingreso,egreso,id};
  // 
  //  console.log(nowdate1);
  //this.newdate1.id=this.idX
  //estudio.titulo="titulo";
  //estudio.institucion="instituto";
  //estudio.carrera="carrera";
  //estudio.logo="logo";
  //estudio.ingreso=2010;
  //estudio.duracion=6;
  //estudio.egreso=2016;

  //this.datosPorfolio.editEstudio(estudio).subscribe(()=>{this.ngOnInit()});
  //this.datosPorfolio.editEstudio(nowdate1).subscribe(()=>{this.ngOnInit()});
  //this.editEstudio(nowdate1);
  //console.log(nowdate1);
  //}
  mostrar_formularioadd() {
    this.add = !this.add;
    this.ngOnInit();
  }
  mostrar_formulario() {
      this.edit = !this.edit;
      this.ngOnInit();
  }
  cerrar_formulario(){
    if (this.add){
      this.add = !this.add;
    }
    if (this.edit){
      this.edit = !this.edit;
    }
    this.ngOnInit();
  }
  
  deleteEstudio(estudio: Estudios) {
    this.datosPorfolio.deleteEstudio(estudio)
      .subscribe(() => { this.ngOnInit() });
      this.ngOnInit();
      
  }
  editEstudio(estudio: Estudios) {
    estudio.id = this.idX;
    estudio.titulo = this.tituloe;
    estudio.institucion = this.institucione;
    estudio.carrera = this.carrerae;
    estudio.logo = this.logoe;
    estudio.ingreso = this.ingresoe;
    estudio.duracion = this.duracione;
    estudio.egreso = this.egresoe;

    this.datosPorfolio.editEstudio(estudio).subscribe(() => { this.ngOnInit() });
  }
  estudiox(id: number) {
    this.idX = id;
    this.edit = !this.edit;
    console.log(this.idX);
  }
  
}
