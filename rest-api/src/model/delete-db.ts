
import "reflect-metadata";

import * as dotenv from 'dotenv';

// this needs to be called before anything, so that the environment variables are loaded
const result = dotenv.config();

import {AppDataSource} from "../data-source";
import {Course} from "./course";
import {Lesson} from "./lesson";
import {User} from "./user";


async function deleteDb() {

    await AppDataSource.initialize();

    console.log(`Clearing LESSONS table ...`);

    await AppDataSource
        .getRepository(Lesson)
        .delete({});

    console.log(`Clearing COURSES table ...`);

    await AppDataSource
        .getRepository(Course)
        .delete({});

    console.log(`Clearing USERS table ...`);

    await AppDataSource
        .getRepository(User)
        .delete({});

}

deleteDb()
    .then(() => {

        console.log(`Finished clearing the database, exiting!`);

        process.exit(0);

    })
    .catch(err => {

        console.error("Error clearing the database", err);

    });


