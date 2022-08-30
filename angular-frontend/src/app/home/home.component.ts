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

    constructor(public coursesService: CoursesService) {

    }

    ngOnInit() {

      this.reload();

    }

  reload() {

    const courses$ = this.coursesService.findAllCourses();

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'BEGINNER') )
    );

    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED') )
    );

  }

}
