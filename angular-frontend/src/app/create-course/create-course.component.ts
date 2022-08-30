import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

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
    category: ['BEGINNER', Validators.required],
    longDescription: ["", [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
