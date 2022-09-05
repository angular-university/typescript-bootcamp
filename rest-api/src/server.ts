
import * as dotenv from 'dotenv';

// this needs to be called before anything, so that the environment variables are loaded
const result = dotenv.config();

if (result.error) {
    console.log(`Error loading environment variables, aborting.`);
    process.exit(1);
}

import "reflect-metadata";
import * as express from 'express';
import {Application} from "express";
import {isInteger} from "./utils";
import {getAllCourses} from "./routes/get-all-courses";
import {root} from "./routes/root";
import {AppDataSource} from "./data-source";
import {logger} from "./logger";
import {defaultErrorHandler} from "./middleware/default-error-handler";
import {findCourseByUrl} from "./routes/find-course-by-url";
import {findLessonsForCourse} from "./routes/find-lessons-for-course";
import {updateCourse} from "./routes/update-course";
import {deleteCourseAndLessons} from "./routes/delete-course-and-lessons";
import {createCourse} from "./routes/create-course";
import {login} from "./routes/login";
import {checkIfAuthenticated} from "./middleware/authentication.middleware";
import {createUser} from "./routes/create-user";
const cors = require('cors');
const bodyParser = require('body-parser');

logger.info("Starting up REST API ...");

const app: Application = express();

function setupExpress() {

    app.use(cors({origin: true}));
    app.use(bodyParser.json());

    app.route("/").get(root);
    app.route('/api/courses').get(checkIfAuthenticated, getAllCourses);
    app.route('/api/courses/:courseUrl').get(checkIfAuthenticated, findCourseByUrl);
    app.route('/api/courses/:courseId/lessons').get(checkIfAuthenticated, findLessonsForCourse);
    app.route('/api/courses/:courseId').patch(checkIfAuthenticated, updateCourse);
    app.route('/api/courses/:courseId').delete(checkIfAuthenticated, deleteCourseAndLessons);
    app.route('/api/courses').post(checkIfAuthenticated, createCourse);

    app.route('/api/login').post(login);
    app.route('/api/users').post(checkIfAuthenticated, createUser);

    app.use(defaultErrorHandler);
}

function startServer() {
    let port;

    const portEnv = process.env.PORT,
        portArg = process.argv[2];

    if (isInteger(portEnv)) {
        port = parseInt(portEnv);
    }

    if (!port && isInteger(portArg)) {
        port = parseInt(portArg);
    }

    if (!port) {
        port = 9000;
    }

    app.listen(port, () => {
        logger.info(`HTTP REST API Server is now running at http://localhost:${port}`);
    });
}

AppDataSource.initialize()
    .then(() => {
        logger.debug("Data Source has been initialized!");
        setupExpress();
        startServer();
    })
    .catch((err) => {
        logger.error("Error during Data Source initialization", err);
    });

