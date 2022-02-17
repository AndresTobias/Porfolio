import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParteSuperiorFijaComponent } from './parte-superior-fija/parte-superior-fija.component';
import { PrincipalComponent } from './principal/principal.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { TrbajosYestudiosComponent } from './trbajos-yestudios/trbajos-yestudios.component';

@NgModule({
  declarations: [
    AppComponent,
    ParteSuperiorFijaComponent,
    PrincipalComponent,
    AcercaDeComponent,
    TrbajosYestudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
