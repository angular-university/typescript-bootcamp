import {Component} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";


@Component({
  selector: "create-user",
  templateUrl: "create-user.component.html",
  styleUrls: ["create-user.component.scss"]
})
export class CreateUserComponent {

  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    pictureUrl: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    isAdmin: [false]
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) {

  }

  onCreateUser() {

    const {email, password, pictureUrl, isAdmin} = this.form.value;

    this.http.post(`${environment.apiBaseUrl}/api/users`, {
      email,
      password,
      pictureUrl,
      isAdmin
    })
      .pipe(
        catchError(err => {
          console.log(err);
          alert('Could not create user');
          return throwError(err);
        })
      )
      .subscribe(() => {
        alert("User created successfully!");
        this.form.reset();
      });

  }

}
