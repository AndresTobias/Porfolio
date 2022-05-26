import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombreUsuario!:string;
  email!: string;
  password!: string;
  loginSi!:any;
  
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
  
  login() {
    const user = { nombreUsuario: this.email, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.loginSi=this.userService.getToken();
        //this.router.navigateByUrl('/');
        console.log(this.loginSi);
        if(this.loginSi)
      {
      console.log("entra en el if");
      //window.location.reload();
      this.router.navigateByUrl('/porfolio');
      };
        
      },
      error => {
        console.log(error);
      });
      this.router.navigateByUrl('/');
      this.irAlPrincipio();
  }
  irAlPrincipio(){
  if (this.loginSi===0){
    this.router.navigateByUrl('/');
  } 
  }
}
