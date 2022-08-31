import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Course} from "../model/course";
import {finalize, map} from "rxjs/operators";
import {Lesson} from "../model/lesson";
import {environment} from "../../environments/environment";
import {FindCourseResponse} from "../model/find-course-response";


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  loading: boolean = false;

  constructor(private http: HttpClient) {

  }

  findCourseByUrl(courseUrl: number): Observable<FindCourseResponse> {
    this.loading = true;
    return this.http.get<FindCourseResponse>(`${environment.apiBaseUrl}/api/courses/${courseUrl}`)
      .pipe(
        finalize(() => this.loading = false)
      );
  }

  findAllCourses(): Observable<Course[]> {
    this.loading = true;
    return this.http.get(`${environment.apiBaseUrl}/api/courses`)
      .pipe(
        map(res => res['courses']),
        finalize(() => this.loading = false)
      );
  }

  findCourseLessons(courseId: number, pageNumber = 0, pageSize = 3): Observable<Lesson[]> {
    this.loading = true;
    return this.http.get(`${environment.apiBaseUrl}/api/courses/${courseId}/lessons`, {
      params: new HttpParams()
        .set('pageNumber', pageNumber)
        .set('pageSize', pageSize)
    }).pipe(
      map(res => res["lessons"]),
      finalize(() => this.loading = false)
    );
  }

  updateCourse(courseId: number, changes: Partial<Course>): Observable<any> {
    this.loading = true;
    return this.http.patch<Course>(`${environment.apiBaseUrl}/api/courses/${courseId}`, changes)
      .pipe(
        finalize(() => this.loading = false)
      );
  }

  deleteCourse(courseId: number): Observable<any> {
    this.loading = true;
    return this.http.delete(`${environment.apiBaseUrl}/api/courses/${courseId}`)
      .pipe(
        finalize(() => this.loading = false)
      );
  }

  createCourse(data: Partial<Course>): Observable<Course> {
    this.loading = true;
    return this.http.post<Course>(`${environment.apiBaseUrl}/api/courses`, data)
      .pipe(
        finalize(() => this.loading = false)
      );
  }

}
