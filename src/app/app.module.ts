import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParteSuperiorFijaComponent } from './parte-superior-fija/parte-superior-fija.component';
import { PrincipalComponent } from './principal/principal.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormAcecaDeComponent } from './form-aceca-de/form-aceca-de.component';
import { ModalComponent } from './modal/modal.component';
import { interceptorProvider } from './interceptor.service';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TortasComponent } from './tortas/tortas.component';
import { LoginDosComponent } from './login-dos/login-dos.component';
@NgModule({
  declarations: [
    AppComponent,
    ParteSuperiorFijaComponent,
    PrincipalComponent,
    AcercaDeComponent,
    TrabajosComponent,
    EstudiosComponent,
    LoginComponent,
    RegisterComponent,
    FormAcecaDeComponent,
    ModalComponent,
    PorfolioComponent,
    TortasComponent,
    LoginDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [CookieService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
