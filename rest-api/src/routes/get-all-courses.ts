
import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";
import {logger} from "../logger";

export async function getAllCourses(request:Request, response:Response) {

    logger.debug(`Called GET /api/courses`);

    const courses: Course[] = await AppDataSource
        .getRepository(Course)
        .createQueryBuilder("courses")
        .orderBy("courses.seqNo")
        .getMany();

    response.json({courses}).status(200);

}
