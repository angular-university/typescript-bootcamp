import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CoursesService} from "../services/courses.service";
import {Course} from "../model/course";
import {Router} from "@angular/router";

@Component({
  selector: "create-course",
  styleUrls: ["create-course.component.scss"],
  templateUrl: "create-course.component.html"
})
export class CreateCourseComponent {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    url: ['', Validators.required],
    iconUrl: ['', Validators.required],
    category: ['BEGINNER', Validators.required],
    longDescription: ["", [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private router: Router) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

  onCreateCourse() {

    const course = this.form.value as Partial<Course>;

    this.coursesService.createCourse(course)
      .subscribe(() => {
        this.router.navigateByUrl(`/courses`);
      });

  }

}
