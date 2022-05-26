import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ProdInterceptorService implements HttpInterceptor {

  constructor(private usersService: UsersService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.usersService.getToken();

    if (token != null) {
      intReq = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    //if (token != null) {
    //  intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    //}
    return next.handle(intReq);
  }
}
export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }];
