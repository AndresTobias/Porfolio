import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-parte-superior-fija',
  templateUrl: './parte-superior-fija.component.html',
  styleUrls: ['./parte-superior-fija.component.css']
})
export class ParteSuperiorFijaComponent implements OnInit {

  loginSi: any;

  constructor(private userService: UsersService) {
  }


  ngOnInit(): void {
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
  }
  logout(){ 
    this.loginSi = this.userService.logout();
  }

}
