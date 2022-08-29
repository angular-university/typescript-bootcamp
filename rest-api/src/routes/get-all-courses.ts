import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";

const ROUTE_ID = `getAllCourses GET /api/courses`;

export async function getAllCourses(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called ${ROUTE_ID}`);
        // throw {error: "Throwing ERROR"};

        const courses: Course[] = await AppDataSource
            .getRepository(Course)
            .createQueryBuilder("courses")
            .orderBy("courses.seqNo")
            .getMany();

        response.json({courses}).status(200);

    } catch (error) {
        logger.error(`Error calling ${ROUTE_ID}`);
        return next(error);
    }


}
