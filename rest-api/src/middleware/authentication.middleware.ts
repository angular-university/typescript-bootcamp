import {Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import {logger} from "../logger";
import {AuthJwtPayload} from "../model/auth-jwt-payload";


export function checkIfAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authJwtToken = request.headers.authorization;

    if (!authJwtToken) {
        logger.error(`The authentication JWT is not present, access denied.`);
        response.sendStatus(403);
        return;
    }

    checkJwtValidity(authJwtToken)
        .then(authJwtPayload => {

            logger.debug(`Authentication JWT successfully decoded: 
            ${JSON.stringify(authJwtPayload, null, 4)}`);

            request["user"] = authJwtPayload;

            next();
        })
        .catch(err => {
            logger.error(`Could not validate the authentication JWT, access denied.`, err);
            response.sendStatus(403);
        });
}


async function checkJwtValidity(authJwtToken: string): Promise<AuthJwtPayload> {

    const user = await jwt.verify(authJwtToken, process.env.JWT_SECRET) as AuthJwtPayload;

    if (user) {
        console.log("Found user details in JWT: ", user);
    }

    return user;
}
