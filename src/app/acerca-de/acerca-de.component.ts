import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { AcercaDe } from '../AcercaDe';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
text1:string="";//en el tuto lo iguala a 0
text2:string="";
text3:string="";
newdate:AcercaDe[]=[];

  datosAcercaDe:any;
  constructor(private datosPorfolio:DatosPorfolioService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatosAcercaDe().subscribe(data =>{
      console.log(data);
      this.datosAcercaDe=data;
  });
  }
  onSubmit()
  {
    if(!this.text1||!this.text2||!this.text3)
    {
      alert("text en 0");
    }
    //if(this.text2.length===0){   --este if era para cuando iguala a 0 las variables--
    //  alert("text en 0");
    // }
  var{text1,text2,text3}=this
  var nowdate={text1,text2,text3}
    console.log(nowdate);

  this.datosPorfolio.formAcercaDe(nowdate).subscribe((nowdate)=>this.newdate.push(nowdate));
  }
  
}
