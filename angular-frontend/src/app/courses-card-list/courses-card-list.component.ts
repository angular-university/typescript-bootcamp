import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Course} from '../model/course';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {openEditCourseDialog} from '../course-dialog/course-dialog.component';
import {catchError, concatMap, filter, tap} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {CoursesService} from "../services/courses.service";
import {throwError} from "rxjs";

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  @Output()
  courseUpdated = new EventEmitter();

  constructor(private dialog: MatDialog, private coursesService: CoursesService) {

  }

  ngOnInit() {

  }

  editCourse(course: Course) {
    openEditCourseDialog(this.dialog, course)
      .pipe(
        filter(val => !!val),
        concatMap(val => this.coursesService.updateCourse(course.id, val)),
        tap(val => {
          console.log(`Updated course: `, val);
          this.courseUpdated.emit(val);
        }),
        catchError(err => {
          console.log(`Error saving course: `, err);
          return throwError(err);
        })
      )
      .subscribe();
  }

  onDeleteCourse(course: Course) {
    this.coursesService.deleteCourse(course.id)
      .pipe(
        catchError(err => {
          console.log(`Error saving course: `, err);
          return throwError(err);
        })

      )
      .subscribe(() => {

      });

  }

}









