import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";


export async function updateCourse(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called updateCourse()`);

        const courseId = request.params.courseId,
              changes = request.body;

    }
    catch (error) {
        logger.error(`Error calling updateCourse()`);
        return next(error);
    }

}
