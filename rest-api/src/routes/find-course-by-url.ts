import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";
import {Lesson} from "../model/lesson";

export async function findCourseByUrl(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called findCourseByUrl()`);

        const courseUrl = request.params.courseUrl;

        if (!courseUrl) {
            throw `Could not extract the course url from the request.`;
        }

        const course: Course = await AppDataSource
            .getRepository(Course)
            .findOneBy({url: courseUrl});

        if (!course) {
            const message = `Could not find a course with url ${courseUrl}`;
            logger.error(message);
            response.status(404).json({message});
            return;
        }

        const totalLessons = await AppDataSource
            .getRepository(Lesson)
            .createQueryBuilder("lessons")
            .where("lessons.courseId = :courseId", {courseId: course.id})
            .getCount();

        response.json({
            course,
            totalLessons
        }).status(200);

    } catch (error) {
        logger.error(`Error calling findCourseByUrl()`);
        return next(error);
    }

}
