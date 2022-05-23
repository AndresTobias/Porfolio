import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { Tortas } from '../Torta';

@Component({
  selector: 'app-tortas',
  templateUrl: './tortas.component.html',
  styleUrls: ['./tortas.component.css']
})
export class TortasComponent implements OnInit {
r1!:number;
t1!:string;
id!:number;
idX!:number;
newdate: Tortas[] = []; 
titulo!:string;
logo!:string;
progreso!:number;
heroes:string[]=["Iron Man","Spiderman","Thor","Hulk","Black Widow","Hawk Eye"];
datosTortas!:any;
edit: boolean = false;
  constructor(private datosPorfolio: DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosTortas().subscribe(data => {
      console.log(data);
      this.datosTortas = data;
      console.log(this.datosTortas)
    });
  this.r1=this.datosTortas[0].progreso;
  }
  mostrar_formulario1() {
    this.idX=1;
    this.edit = !this.edit;
    this.ngOnInit();
  }
  mostrar_formulario2() {
    this.idX=2;
    this.edit = !this.edit;
    this.ngOnInit();
  }
  mostrar_formulario3() {
    this.idX=3;
    this.edit = !this.edit;
    this.ngOnInit();
  }
  onSubmit() {
    if (!this.titulo || !this.progreso) {
      alert("text en 0");
    }
    var { titulo, logo, progreso, id } = this
    var nowdate = { titulo, logo, progreso, id }
    nowdate.id = this.idX;
    console.log(nowdate);
    this.datosPorfolio.editTorta(nowdate).subscribe(() => { this.ngOnInit() });
  }  

}
