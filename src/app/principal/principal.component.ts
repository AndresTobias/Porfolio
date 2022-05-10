import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { PrincipalImg } from '../pricipalImg';
import { PrincipalDato } from '../principalDato';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  text1:string="";//en el tuto lo iguala a 0
  text2:string="";
  text3:string="";
  text4:string="";
  text5:string="";
  text6:string="";
  text7:string="";
  text8:string="";
  newdate:PrincipalDato[]=[];
  newdateImg:PrincipalImg[]=[];
  datosPrincipal:any;
  miDatoPrincipal!:any;
  miImgPrincipal:any;
  loginSi:any;
  edit:boolean=false;
  edit1:boolean=false;
  
  constructor(private datosPorfolio:DatosPorfolioService, private userService:UsersService) { }

  ngOnInit(): void {
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
    
    this.datosPorfolio.obtenerDatosPrincipal().subscribe(data =>{
      console.log(data);
      this.miDatoPrincipal=data;
    });
    this.datosPorfolio.obtenerImgPrincipal().subscribe(data =>{
      console.log(data);
      this.miImgPrincipal=data;
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
  var{text1,text2,text3,text4}=this;
  var nowdate={text1,text2,text3,text4};
    console.log(nowdate);

  this.datosPorfolio.formPrincipalDato(nowdate).subscribe((nowdate)=>this.newdate.push(nowdate));
  
  }
  onSubmit1(){
    if(!this.text5||!this.text6||!this.text7)
    {
      alert("text en 0");
    }
    //if(this.text2.length===0){   --este if era para cuando iguala a 0 las variables--
    //  alert("text en 0");
    // }
  var{text5,text6,text7,text8}=this;
  var nowdateImg={text5,text6,text7,text8};
    console.log(nowdateImg);

  this.datosPorfolio.formPrincipalImg(nowdateImg).subscribe((nowdateImg)=>this.newdateImg.push(nowdateImg));

  }
  
  
  mostrar_formulario(){ 
    this.edit = !this.edit;
    this.ngOnInit();
  }
  mostrar_formularioImg(){ 
    this.edit1 = !this.edit1;
    this.ngOnInit();
  }
}


