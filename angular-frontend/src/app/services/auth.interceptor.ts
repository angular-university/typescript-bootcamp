
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {USER_DATA} from "../model/constants";
import {LoginResponse} from "../model/login-response.";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authJwtToken:string;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.authJwtToken) {

      const payload = localStorage.getItem(USER_DATA);

      if (payload) {
        const userData = JSON.parse(payload) as LoginResponse;
        this.authJwtToken = userData.authJwtToken;
      }
    }

    if (this.authJwtToken) {

      const cloned = req.clone({
        headers: req.headers
          .set('Authorization',`${this.authJwtToken}`)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }

}
