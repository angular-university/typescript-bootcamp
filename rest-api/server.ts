import * as express from 'express';
import {Application} from "express";
import {isInteger} from "./utils";
import {getAllCourses} from "./routes/get-all-courses";
import {root} from "./routes/root";

const app: Application = express();

//const cors = require('cors');
//app.use(cors({origin: true}));


function setupRoutes() {

    app.route("/").get(root);
    app.route('/api/courses').get(getAllCourses);

//app.route('/api/courses/:id').get(getCourseById);

//app.route('/api/lessons').get(searchLessons);

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
        console.log(`HTTP REST API Server running at http://localhost:${port}`);
    });
}

setupRoutes();

startServer();
