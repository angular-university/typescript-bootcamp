import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import {CourseResolver} from "./services/course.resolver";
import {CreateCourseComponent} from './create-course/create-course.component';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth.guard";
import {CreateUserComponent} from "./create-user/create-user.component";
import {AdminOnlyGuard} from "./services/admin-only.guard";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "login",
    component: LoginComponent

  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:courseUrl',
    component: CourseComponent,
    resolve: {
      course: CourseResolver
    },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'add-new-course',
    component: CreateCourseComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: "create-user",
    component: CreateUserComponent,
    canActivate: [AuthGuard, AdminOnlyGuard],
    canActivateChild: [AuthGuard, AdminOnlyGuard]
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
