


import {Request, Response} from "express";

export function root(request:Request, response:Response) {

    response.send(`<h1>Express server is up and running.</h1>`).status(200);


}
