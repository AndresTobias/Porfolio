import { Component, Input, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { AcercaDe } from '../AcercaDe';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  @Input() data!: string[]; 
  id:number=1;
  text1: string = "";//en el tuto lo iguala a 0
  text2: string = "";
  text3: string = "";
  newdate: AcercaDe[] = [];
  datosAcercaDe: any;
  edit: boolean = false;
  loginSi: any;
  constructor(private datosPorfolio: DatosPorfolioService, private userService: UsersService) { }

  ngOnInit(): void {

    this.datosPorfolio.obtenerDatosAcercaDe().subscribe(data => {
      console.log(data);
      this.datosAcercaDe = data;


    });
    this.loginSi = this.userService.getToken();
  }
  onSubmit() {
    if (!this.text1 || !this.text2 || !this.text3) {
      alert("text en 0");
    }
    //if(this.text2.length===0){   --este if era para cuando iguala a 0 las variables--
    //  alert("text en 0");
    // }
    var { id,text1, text2, text3 } = this
    var nowdate = { id,text1, text2, text3 }
    console.log(nowdate);

    this.datosPorfolio.formAcercaDe(nowdate).subscribe((nowdate) => this.newdate.push(nowdate));

  }
  mostrar_formulario() {
    this.edit = !this.edit;
    this.ngOnInit();
  }
} 
