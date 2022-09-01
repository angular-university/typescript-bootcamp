
import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {logger} from "../logger";
import {User} from "../model/user";
import {calculatePasswordHash} from "../utils";
import * as jwt from 'jsonwebtoken';
import {AuthJwtPayload} from "../model/auth-jwt-payload";

export async function login(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called login()`);

        const {email, password} = request.body;

        if (!email) {
            throw "Could not extract the email from the request, aborting.";
        }

        if (!password) {
            throw "Could not extract the plain text password from the request, aborting.";
        }

        const user: User = await AppDataSource
            .getRepository(User)
            .createQueryBuilder("users")
            .where("email = :email", {email})
            .getOne();

        if (!user) {
            const message = `Could not find user with email ${email}`;
            console.log(message);
            response.status(403).json({message});
            return;
        }

        const passwordHash = await calculatePasswordHash(password, user.passwordSalt);

        if (passwordHash != user.passwordHash) {
            const message = `Invalid password, access denied.`;
            console.log(message);
            response.status(403).json({message});
            return;
        }

        logger.info(`User ${email} has now logged in.`);

        const {pictureUrl, isAdmin} = user;

        const authJwt = {
            userId: user.id,
            email,
            isAdmin
        } as AuthJwtPayload;

        const authJwtToken = await jwt.sign(authJwt, process.env.JWT_SECRET);

        response.json({
            user: {
                email,
                pictureUrl,
                isAdmin
            },
            authJwtToken
        }).status(200);

    } catch (error) {
        logger.error(`Error calling login()`);
        return next(error);
    }

}

