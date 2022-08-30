import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";
import {Lesson} from "../model/lesson";
import {isInteger} from "../utils";


export async function updateCourse(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called updateCourse()`);

        const courseId = request.params.courseId,
                changes = request.body;

        if (!courseId) {
            throw `Could not extract courseId from the request.`;
        }

        await AppDataSource
            .createQueryBuilder()
            .update(Course)
            .set(changes)
            .where("id = :id", {id: courseId})
            .execute();

        response.json({message: `Course ${courseId} updated successfully.`}).status(200);

    } catch (error) {
        logger.error(`Error calling updateCourse()`);
        return next(error);
    }


}
