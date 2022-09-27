import {Response, Request, NextFunction} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {Course} from "../models/course";

export async function getAllCourses(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called getAllCourses()`);

        const courses = await AppDataSource
            .getRepository(Course)
            .createQueryBuilder("courses")
            .orderBy("courses.seqNo")
            .getMany();

        response.status(200).json({courses});

    }
    catch (error) {
        logger.error(`Error calling getAllCourses()`);
        return next(error);
    }


}
