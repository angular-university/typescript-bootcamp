
import {Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {Course} from "../model/course";

export async function getAllCourses(request:Request, response:Response) {

    console.log(`Called GET /api/courses`);

    const courses: Course[] = await AppDataSource
        .getRepository(Course)
        .createQueryBuilder("courses")
        .orderBy("courses.seqNo")
        .getMany();

    console.log(courses);

    response.json({courses}).status(200);

}
