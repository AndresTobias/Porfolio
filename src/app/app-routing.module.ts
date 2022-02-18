import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { PrincipalComponent } from './principal/principal.component';
import { TrbajosYestudiosComponent } from './trbajos-yestudios/trbajos-yestudios.component';
const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'trabajos', component: TrbajosYestudiosComponent },
  { path: 'acerca', component: AcercaDeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
