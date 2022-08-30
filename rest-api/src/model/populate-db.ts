import * as dotenv from 'dotenv';

// this needs to be called before anything, so that the environment variables are loaded
const result = dotenv.config();

import "reflect-metadata";
import {AppDataSource} from "../data-source";
import {Course} from "./course";
import {COURSES, USERS} from "./db-data";
import {Lesson} from "./lesson";
import {DeepPartial} from "typeorm";
import {User} from "./user";
const crypto = require('crypto');

async function populateDb() {

    await AppDataSource.initialize();

    const courses = Object.values(COURSES) as DeepPartial<Course>[];

    for (let courseData of courses) {

        console.log(`Inserting course: ${courseData.title}`);

        const course = AppDataSource.getRepository(Course).create({...courseData});

        await AppDataSource.manager.save(course);

        for (let lessonData of courseData.lessons) {

            console.log(`Inserting lesson: ${lessonData.title}`);

            const lesson = AppDataSource.getRepository(Lesson).create({...lessonData});

            lesson.course = course;

            await AppDataSource.manager.save(lesson);

        }

    }

    const users = Object.values(USERS) as any[];

    for (let userData of users) {

        console.log(`Inserting user: ${userData}`);

        const {email, pictureUrl, isAdmin, passwordSalt, plainTextPassword} = userData;

        const user = AppDataSource.getRepository(User).create({
            email,
            pictureUrl,
            isAdmin,
            passwordSalt
        });

        user.passwordHash = crypto.pbkdf2Sync(
            plainTextPassword,
            passwordSalt,
            1000,
            64,
            `sha512`)
        .toString(`hex`);

        await AppDataSource.manager.save(user);

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

    const totalUsers = await AppDataSource
        .getRepository(User)
        .createQueryBuilder()
        .getCount();

    console.log(`Total users inserted: ${totalUsers}`);

}

populateDb()
    .then(() => {

        console.log(`Finished populating the database, exiting!`);

        process.exit(0);

    })
    .catch(err => {

        console.error("Error populating database", err);

    });


