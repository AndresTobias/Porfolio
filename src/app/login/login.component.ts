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
  email!: string;
  password!: string;
  loginSi!:any;
  
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
  
  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.loginSi=this.userService.getToken();
        this.router.navigateByUrl('/');
        console.log(this.loginSi);
      },
      error => {
        console.log(error);
      });
  }
  
}
