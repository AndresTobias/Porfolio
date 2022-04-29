import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { RecargaService } from '../recarga.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-parte-superior-fija',
  templateUrl: './parte-superior-fija.component.html',
  styleUrls: ['./parte-superior-fija.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParteSuperiorFijaComponent implements OnInit {

  loginSi: any;

  constructor(private userService: UsersService, private ref:RecargaService) {
  }


  ngOnInit(): void {
    this.loginSi = this.userService.getToken();
    console.log(this.loginSi);
    this.ref.$recargar.emit(this.loginSi);
  }
  logout(){ 
    this.loginSi = this.userService.logout();
    window.location.reload();
  }

}
