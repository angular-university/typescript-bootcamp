import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {User} from "../model/user";

const USER_DATA = "user_data";

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
    return this.http.post<User>(`${environment.apiBaseUrl}/api/login`, {email, password})
      .pipe(
        finalize(() => this.loading = false),
        tap(user => {
          this.user = user;
          localStorage.setItem(USER_DATA, JSON.stringify(user));
        })
      );
  }

  logout() {
    this.user = null;
    localStorage.removeItem(USER_DATA);
  }

}
