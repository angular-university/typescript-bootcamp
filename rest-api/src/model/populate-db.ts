import * as dotenv from 'dotenv';

// this needs to be called before anything, so that the environment variables are loaded
const result = dotenv.config();

import "reflect-metadata";
import {AppDataSource} from "../data-source";
import {Course} from "./course";
import {COURSES, LESSONS} from "./db-data";
import {Lesson} from "./lesson";


async function populateDb() {

    await AppDataSource.initialize();

    const courses = Object.values(COURSES) as Course[];

    for (let course of courses) {

        const courseId = course.id;

        console.log(`Inserting course: ${course.title}`);

        const savedCourse = await AppDataSource
            .getRepository(Course)
            .save(course);

        const lessons = findLessonsForCourse(courseId);

        for (let lesson of lessons) {
            lesson.courseId = savedCourse.id;
            console.log(`Inserting lesson: ${lesson.title}`);
            await AppDataSource
                .getRepository(Lesson)
                .save(lesson);
        }

    }

    const totalCourses = await AppDataSource
        .getRepository(Course)
        .createQueryBuilder()
        .getCount();

    console.log(`Total courses inserted: ${totalCourses}`);

    const totalLessons = await AppDataSource
        .getRepository(Lesson)
        .createQueryBuilder()
        .getCount();

    console.log(`Total lessons inserted: ${totalLessons}`);

}

function findLessonsForCourse(courseId:number) {
    const lessons = Object.values(LESSONS) as Lesson[];

    console.log(`total lessons ${lessons.length}, courseId = ${courseId}`);

    return lessons.filter(lesson => lesson.courseId == courseId);
}

populateDb()
    .then(() => {

        console.log(`Finished populating the database, exiting!`);

        process.exit(0);

    })
    .catch(err => {

        console.error("Error populating database", err);

    });


