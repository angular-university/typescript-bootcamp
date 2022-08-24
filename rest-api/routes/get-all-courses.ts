
import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";

export async function getAllCourses(request:Request, response:Response) {

    const courses: Course[] = await AppDataSource
        .getRepository(Course)
        .createQueryBuilder("courses")
        .orderBy("courses.seqNo")
        .getMany();

    response.json({courses}).status(200);

}
