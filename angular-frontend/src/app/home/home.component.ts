import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "../services/courses.service";
import {finalize, map} from "rxjs/operators";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    loading = true;

    constructor(private coursesService: CoursesService) {

    }

    ngOnInit() {

      this.reload();

    }

  onUpdate() {

      this.reload();

  }

  reload() {

    this.loading = true;

    const courses$ = this.coursesService.findAllCourses()
      .pipe(
        finalize(() => this.loading = false)
      );

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'BEGINNER') )
    );

    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED') )
    );

  }

}
