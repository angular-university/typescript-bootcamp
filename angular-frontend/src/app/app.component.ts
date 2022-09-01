import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    private cookieService: CookieService,
    private router: Router) {

  }

  logout() {
    this.auth.logout();
    this.cookieService.delete("AUTH_JWT");
    this.router.navigateByUrl(`/login`);
  }
}
