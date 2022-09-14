
import * as dotenv from "dotenv";

const result = dotenv.config();

import "reflect-metadata";

import {COURSES} from "./db-data";
import {AppDataSource} from "../data-source";

async function populateDb() {

    await AppDataSource.initialize();

    console.log(`Database connection ready.`);



}

populateDb()
    .then(() => {
        console.log(`Finished populating database, exiting!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(`Error populating database.`, err);
    });

