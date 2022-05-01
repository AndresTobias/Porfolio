import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { Estudios } from '../estudios';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
listaDeEstudios:any;
loginSi:any;
id?:number;
institucion!:string;
titulo!:string;
logo!:string;
carrera!:string;
duracion!:number;
ingreso!:number;
egreso!:number;
newdate:Estudios[]=[];
edit:boolean=false;
add:boolean=false;
  constructor(private datosPorfolio:DatosPorfolioService, private userService:UsersService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosEducacion().subscribe(data =>{
      console.log(data)
      this.listaDeEstudios=data;
    });
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
  }

  onSubmit()
  {
    if(!this.titulo||!this.institucion||!this.logo)
    {
      alert("text en 0");
    }
    //if(this.text2.length===0){   --este if era para cuando iguala a 0 las variables--
    //  alert("text en 0");
    // }
  var{institucion,titulo,logo,carrera,duracion,ingreso,egreso}=this
  var nowdate={institucion,titulo,logo,carrera,duracion,ingreso,egreso}
    console.log(nowdate);

  this.datosPorfolio.formEstudios(nowdate).subscribe((nowdate)=>this.newdate.push(nowdate));
  
}
mostrar_formulario(){ 
  this.edit = !this.edit;
  this.ngOnInit();
}
mostrar_formularioadd(){ 
  this.add = !this.add;
  this.ngOnInit();
}


}
