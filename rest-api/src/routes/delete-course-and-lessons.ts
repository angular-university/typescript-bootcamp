
import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";
import {isInteger} from "../utils";
import {Lesson} from "../model/lesson";


export async function deleteCourseAndLessons(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called deleteCourseAndLessons()`);

        const courseId = request.params.courseId;

        if (!isInteger(courseId)) {
            throw `Invalid course id ${courseId}`;
        }

        await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

            await AppDataSource
                .createQueryBuilder()
                .delete()
                .from(Lesson)
                .where("courseId = :courseId", { courseId})
                .execute();

            await AppDataSource
                .createQueryBuilder()
                .delete()
                .from(Course)
                .where("id = :courseId", {courseId})
                .execute();

        });

        response.json({message: `Course ${courseId} deleted successfully.`}).status(200);

    } catch (error) {
        logger.error(`Error calling deleteCourseAndLessons()`);
        return next(error);
    }


}
