
import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router,
  RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from "./auth.service";


@Injectable()
export class AdminOnlyGuard implements CanActivate, CanActivateChild {

  constructor(
    private auth:AuthService,
    private router:Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree  {

    return this.checkIfAllowed();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean | UrlTree   {

    return this.checkIfAllowed();
  }

  private checkIfAllowed() {
    return this.auth.user?.isAdmin ? true :  this.router.parseUrl('/login');
  }

}
