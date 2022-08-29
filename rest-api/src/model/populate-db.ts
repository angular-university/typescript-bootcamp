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

    console.log(courses);

    for (let course of courses) {
        console.log(`Inserting course: ${course.title}`);
        await AppDataSource
            .getRepository(Course)
            .save(course)
    }

    const lessons = Object.values(LESSONS) as Lesson[];

    for (let lesson of lessons) {
        console.log(`Inserting lesson: ${lesson.title}`);
        await AppDataSource
            .getRepository(Lesson)
            .save(lesson)
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

populateDb()
    .then(() => {

        console.log(`Finished populating the database, exiting!`);

        process.exit(0);

    })
    .catch(err => {

        console.error("Error populating database", err);

    });


