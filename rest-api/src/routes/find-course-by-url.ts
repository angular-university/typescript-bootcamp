import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {Course} from "../models/course";
import {Lesson} from "../models/lesson";


export async function findCourseByUrl(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called findCourseByUrl()`);

        const courseUrl = request.params.courseUrl;

        if (!courseUrl) {
            throw `Could not extract the course url from the request.`;
        }

        const course = await AppDataSource
            .getRepository(Course)
            .findOneBy({
                url: courseUrl
            });

        if (!course) {
            const message = `Could not find a course with url ${courseUrl}`;
            logger.error(message);
            response.status(404).json({message});
            return;
        }

        const totalLessons = await AppDataSource
            .getRepository(Lesson)
            .createQueryBuilder("lessons")
            .where("lessons.courseId = :courseId", {
                courseId: course.id
            })
            .getCount()

        response.status(200).json({
           course,
           totalLessons
        });


    }
    catch (error) {
        logger.error(`Error calling findCourseByUrl()`);
        return next(error);
    }

}
