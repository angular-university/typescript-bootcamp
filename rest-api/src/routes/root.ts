
import {Response, Request} from "express";

export function root(request: Request, response: Response) {

    response.status(200).send("<h1>Express server is up and running.</h1>");

}
