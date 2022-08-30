import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import {CourseResolver} from "./services/course.resolver";
import {CreateCourseComponent} from './create-course/create-course.component';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "login",
    component: LoginComponent

  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'courses/:courseUrl',
    component: CourseComponent,
    resolve: {
      course: CourseResolver
    }
  },
  {
    path: 'add-new-course',
    component: CreateCourseComponent
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
