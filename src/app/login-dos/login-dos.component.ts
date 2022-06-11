import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login-dos',
  templateUrl: './login-dos.component.html',
  styleUrls: ['./login-dos.component.css']
})
export class LoginDosComponent implements OnInit {
  form:FormGroup;
  loginSi!:any;
  girador:boolean=false;
  rechazado:boolean=false;
  constructor(private formBuilder:FormBuilder,
              private userService:UsersService,
              private router:Router 
              ) 
              
  {
    this.form=this.formBuilder.group({
      nombreUsuario:['',[Validators.required,Validators.minLength(7)]],
      password:['',[Validators.required,Validators.minLength(7)]]
    })
  }

ngOnInit(): void {
  }
get NombreUsuario(){
  return this.form.get('nombreUsuario');
}
get Password(){
  return this.form.get('password');
}

login() {
  const user = { nombreUsuario: this.NombreUsuario?.value, password: this.Password?.value};
  console.log(user);
  this.girador=true;
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
      this.girador=false;
      this.rechazado=true;
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

