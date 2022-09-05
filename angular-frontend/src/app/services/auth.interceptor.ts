
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {USER_DATA} from "../model/constants";
import {LoginResponse} from "../model/login-response.";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const payload = localStorage.getItem(USER_DATA);

    if (payload) {
      const userData = JSON.parse(payload) as LoginResponse;
      const authJwtToken = userData.authJwtToken;

      const cloned = req.clone({
        headers: req.headers
          .set('Authorization',`${authJwtToken}`)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }

}
