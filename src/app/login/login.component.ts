import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }
  
  login() {
    const user = {email: this.email, password: this.password};
    
    this.userService.login(user).subscribe( data => {
      console.log(data);
    });
  
  }

}
