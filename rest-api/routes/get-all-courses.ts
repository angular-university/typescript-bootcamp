
import {Request, Response} from "express";

export function getAllCourses(request:Request, response:Response) {

    response.json({hello: "World"}).status(200);


}
