import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {Course} from "../models/course";

/*
*
* curl -X POST http://localhost:9000/api/courses -H "Content-Type:application/json" -d '{"url": "firebase-bootcamp", "title": "Firebase Bootcamp", "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg","longDescription": "Complete guided tour to the Firebase ecosystem.", "category": "BEGINNER"}'
*
* {"url": "firebase-bootcamp", "title": "Firebase Bootcamp", "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg","longDescription": "Complete guided tour to the Firebase ecosystem.", "category": "BEGINNER"}
*
* */

export async function createCourse(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called createCourse()`);

        const data = request.body;

        if (!data) {
            throw `No data available, cannot save course.`;
        }

        const course = await AppDataSource.manager.transaction(
          "REPEATABLE READ",
            async (transactionalEntityManager) => {

              const repository = transactionalEntityManager.getRepository(Course);

              const result = await repository
                  .createQueryBuilder("courses")
                  .select("MAX(courses.seqNo)", "max")
                  .getRawOne();

              const course = repository
                  .create({
                      ...data,
                      seqNo: ( result?.max ?? 0 ) + 1
                  });

              await repository.save(course);

              return course;
            }
        );

        response.status(200).json({course});

    }
    catch(error) {
        logger.error(`Error calling createCourse()`);
        return next(error);
    }

}
