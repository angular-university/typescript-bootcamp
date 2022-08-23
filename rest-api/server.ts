
import * as express from 'express';
import {Application} from "express";
import {isInteger} from "./utils";

const app: Application = express();

//const cors = require('cors');

//app.use(cors({origin: true}));

// app.route('/api/courses').get(getAllCourses);

//app.route('/api/courses/:id').get(getCourseById);

//app.route('/api/lessons').get(searchLessons);

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

const httpServer:any = app.listen(port, () => {
    console.log(`HTTP REST API Server running at http://localhost:${port}`);
});


