import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";


export function checkIfAdmin(request: Request, response: Response, next:NextFunction) {

    const user = request["user"];

    if (!user?.isAdmin) {
        logger.error(`The user is not an admin, access denied`);
        response.sendStatus(403);
        return;
    }

    logger.debug(`The user is a valid admin, granting access.`);

    next();

}
