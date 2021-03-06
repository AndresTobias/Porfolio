import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { LoginDosComponent } from './login-dos/login-dos.component';
import { LoginComponent } from './login/login.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterComponent } from './register/register.component';
import { TortasComponent } from './tortas/tortas.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
};
const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "porfolio", component: PorfolioComponent },
  { path: "login-dos", component: LoginDosComponent },
  { path: "register", component: RegisterComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'acerca', component: AcercaDeComponent },
  { path: 'tortas', component: TortasComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login-dos' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
