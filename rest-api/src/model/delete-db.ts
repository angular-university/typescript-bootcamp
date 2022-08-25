import "reflect-metadata";

import {AppDataSource} from "../data-source";
import {Course} from "./course";
import {Lesson} from "./lesson";


async function deleteDb() {

    await AppDataSource.initialize();

    console.log(`Clearing LESSONS table ...`);

    await AppDataSource
        .getRepository(Lesson)
        .clear();

    console.log(`Clearing COURSES table ...`);

    await AppDataSource
        .getRepository(Course)
        .clear();



}

deleteDb()
    .then(() => {

        console.log(`Finished clearing the database, exiting!`);

        process.exit(0);

    })
    .catch(err => {

        console.error("Error clearing the database", err);

    });

