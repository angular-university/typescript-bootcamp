
import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";
import {Lesson} from "../model/lesson";

export async function createCourse(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called createCourse()`);

        const data = request.body;

        if (!data) {
            throw `No data available, cannot save course.`;
        }

        await AppDataSource.manager.transaction(
            "REPEATABLE READ",
            async (transactionalEntityManager) => {

                const result = await transactionalEntityManager
                    .getRepository(Course)
                    .createQueryBuilder("courses")
                    .select("MAX(courses.seqNo)", "max")
                    .getRawOne();

                const course = transactionalEntityManager
                    .getRepository(Course)
                    .create({
                        ...data,
                        seqNo: (result?.max ?? 0) + 1
                    });

                await transactionalEntityManager
                    .getRepository(Course)
                    .save(course);

                response.json(course).status(200);

        });

    } catch (error) {
        logger.error(`Error calling createCourse()`);
        return next(error);
    }


}
