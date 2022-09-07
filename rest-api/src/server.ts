
import * as express from 'express';

const app = express();


function setupExpress() {

    app.route("/").get(root);


}

function startServer() {

}

setupExpress();

startServer();
