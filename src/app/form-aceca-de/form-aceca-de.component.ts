import { Component, OnInit } from '@angular/core';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';
import { AcercaDe } from '../AcercaDe';
import { DatosPorfolioService } from '../datos-porfolio.service';
@Component({
  selector: 'app-form-aceca-de',
  templateUrl: './form-aceca-de.component.html',
  styleUrls: ['./form-aceca-de.component.css']
})
export class FormAcecaDeComponent implements OnInit 
{
text1:string="";//en el tuto lo iguala a 0
text2:string="";
text3:string="";
newdate:AcercaDe[]=[];
  constructor(private datosPorfolio:DatosPorfolioService) { }

  ngOnInit(): void {
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


