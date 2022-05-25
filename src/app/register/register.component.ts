import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor(private userService:UsersService , private router:Router) { }

  ngOnInit(): void {
  }
  //register() {
  //  const user = { email: this.email, password: this.password };
  //  
  //  this.userService.register(user).subscribe(data => {
  //    this.userService.setToken(data.token);
  //    this.router.navigateByUrl('/');
  //  });
  //}
}
