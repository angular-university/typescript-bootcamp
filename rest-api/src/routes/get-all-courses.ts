import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";

export async function getAllCourses(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called getAllCourses()`);
        // throw {error: "Throwing ERROR"};

        const courses: Course[] = await AppDataSource
            .getRepository(Course)
            .createQueryBuilder("courses")
            // .leftJoinAndSelect("courses.lessons", "LESSONS")
            .orderBy("courses.seqNo")
            .getMany();

        response.json({courses}).status(200);

    } catch (error) {
        logger.error(`Error calling getAllCourses()`);
        return next(error);
    }


}
