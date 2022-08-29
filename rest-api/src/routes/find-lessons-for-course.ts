import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";
import {Lesson} from "../model/lesson";

const ROUTE_ID = `findLessonsForCourse GET /api/courses/:courseId/lessons`;

export async function findLessonsForCourse(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called ${ROUTE_ID}`);

        const courseId = parseInt(request.params.courseId);

        console.log(`courseId =${courseId}`);

        if (!courseId) {
            throw `Could not extract courseId from the request.`;
        }

        const lessons: Lesson[] = await AppDataSource
            .getRepository(Lesson)
            .createQueryBuilder("lessons")
            .where("lessons.courseId = :courseId", {courseId})
            .orderBy("lessons.seqNo")
            .getMany();

        response.json({lessons}).status(200);

    } catch (error) {
        logger.error(`Error calling ${ROUTE_ID}`);
        return next(error);
    }


}
