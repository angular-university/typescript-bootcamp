

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";
import {environment} from "../../environments/environment";
import {FindCourseResponse} from "../model/find-course-response";


@Injectable()
export class CoursesService {

    constructor(private http:HttpClient) {

    }

    findCourseByUrl(courseUrl: number): Observable<FindCourseResponse> {
        return this.http.get<FindCourseResponse>(`${environment.apiBaseUrl}/api/courses/${courseUrl}`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get(`${environment.apiBaseUrl}/api/courses`)
            .pipe(
                map(res => res['courses'])
            );
    }

    findCourseLessons(courseId:number, pageNumber = 0, pageSize = 3): Observable<Lesson[]> {
        return this.http.get(`${environment.apiBaseUrl}/api/courses/${courseId}/lessons`, {
            params: new HttpParams()
                .set('pageNumber', pageNumber)
                .set('pageSize', pageSize)
        }).pipe(
            map(res =>  res["lessons"])
        );
    }

}
