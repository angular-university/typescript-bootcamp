import { Course } from "./course";


export interface FindCourseResponse {
  course: Course;
  totalLessons: number;
}
