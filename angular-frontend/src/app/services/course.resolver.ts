


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";
import {FindCourseResponse} from "../model/find-course-response";



@Injectable()
export class CourseResolver implements Resolve<FindCourseResponse> {

    constructor(private coursesService:CoursesService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FindCourseResponse> {
        return this.coursesService.findCourseByUrl(route.params['courseUrl']);
    }

}

