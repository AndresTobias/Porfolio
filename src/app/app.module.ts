import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParteSuperiorFijaComponent } from './parte-superior-fija/parte-superior-fija.component';
import { PrincipalComponent } from './principal/principal.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { EstudiosComponent } from './estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    ParteSuperiorFijaComponent,
    PrincipalComponent,
    AcercaDeComponent,
    TrabajosComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
