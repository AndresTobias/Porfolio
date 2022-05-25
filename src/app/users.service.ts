import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
token:any;
  constructor(private http: HttpClient,private cookies : CookieService) { }

login(user:any): Observable<any>{
  return this.http.post("http://localhost:8080/auth/login", user)
  //return this.http.post("https://reqres.in/api/login", user)
}

//register(user: any): Observable<any> {
//  return this.http.post("https://reqres.in/api/register", user);
//}
setToken(token: any) {
  this.cookies.set("token", token);
}
getToken() {
  return this.cookies.get("token");
}

getUserLogged(): Observable<any>{
  const token = this.getToken();
  return this.token;
}
//getUser() {
//  return this.http.get("https://reqres.in/api/users/2");
//}
logout(){ 
  this.cookies.delete("token");
}
}
