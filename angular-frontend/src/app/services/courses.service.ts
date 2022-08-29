

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {map} from "rxjs/operators";
import {Lesson} from "../model/lesson";
import {environment} from "../../environments/environment";


@Injectable()
export class CoursesService {

    constructor(private http:HttpClient) {

    }

    findCourseByUrl(courseUrl: number): Observable<Course> {
        return this.http.get<Course>(`${environment.apiBaseUrl}/api/courses/${courseUrl}`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get(`${environment.apiBaseUrl}/api/courses`)
            .pipe(
                map(res => res['courses'])
            );
    }

    findLessons(
        courseId:number, sortOrder = 'asc',
        pageNumber = 0, pageSize = 3, sortColumn = 'seqNo'):  Observable<Lesson[]> {

        return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
                .set('sortColumn', sortColumn)
        }).pipe(
            map(res =>  res["payload"])
        );
    }

}
