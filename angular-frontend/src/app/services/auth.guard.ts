
import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router,
  RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private auth:AuthService,
    private router:Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree  {

    return this.checkIfAuthenticated();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean | UrlTree   {

    return this.checkIfAuthenticated();
  }

  private checkIfAuthenticated() {
    return this.auth.user ? true :  this.router.parseUrl('/login');
  }

}
