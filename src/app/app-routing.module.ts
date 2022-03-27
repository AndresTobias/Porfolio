import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterComponent } from './register/register.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
const routes: Routes = [
 // { path: "", component: AppComponent },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'acerca', component: AcercaDeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
