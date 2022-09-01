import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize, map, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {User} from "../model/user";
import {LoginResponse} from "../model/login-response.";
import {USER_DATA} from "../model/constants";


@Injectable({
  providedIn: "root"
})
export class AuthService {

  loading: boolean = false;

  user:User;

  constructor(private http: HttpClient) {

    const user = localStorage.getItem(USER_DATA);

    if (user) {
      this.user = JSON.parse(user);
    }

  }

  login(email:string, password:string): Observable<User> {
    this.loading = true;
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/login`, {email, password})
      .pipe(
        finalize(() => this.loading = false),
        tap(payload => {
          this.user =payload?.user;
          localStorage.setItem(USER_DATA, JSON.stringify(payload));
        }),
        map(payload => payload.user)
      );
  }

  logout() {
    this.user = null;
    localStorage.removeItem(USER_DATA);
  }

  get isLoggedIn() {
    return !!this.user;
  }

}
