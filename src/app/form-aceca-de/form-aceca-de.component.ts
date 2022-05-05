import { Component, OnInit } from '@angular/core';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';
import { AcercaDe } from '../AcercaDe';
import { DatosPorfolioService } from '../datos-porfolio.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-aceca-de',
  templateUrl: './form-aceca-de.component.html',
  styleUrls: ['./form-aceca-de.component.css']
})
export class FormAcecaDeComponent implements OnInit {
  text1: string = "";//en el tuto lo iguala a 0
  text2: string = "";
  text3: string = "";
  newdate: AcercaDe[] = [];
  email!: string;
  password!: string;
  loginSi!: any;
  lista:number[]=[ 1,2,3,4];
  id!:number
  constructor(private datosPorfolio: DatosPorfolioService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  async saveBooks(){
    console.log( this.id);
}

  obtenerId(item:number){
    this.id=item;
  }
  login() {
    const user = { email: this.email, password: this.password };
    
  }
  irAlPrincipio() {
    if (this.loginSi === 0) {
      this.router.navigateByUrl('/');
    }
  }
}