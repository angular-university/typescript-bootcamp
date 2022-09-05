
const crypto = require('crypto');

import {NextFunction, Request, Response} from "express";
import {AppDataSource} from "../data-source";
import {logger} from "../logger";
import {User} from "../model/user";
import {calculatePasswordHash} from "../utils";


export async function createUser(request: Request, response: Response, next: NextFunction) {

    try {

        logger.debug(`Called createUser()`);

        const {email, pictureUrl, password, isAdmin} = request.body;

        if (!email) {
            throw "Could not extract the email from the request, aborting.";
        }

        if (!password) {
            throw "Could not extract the plain text password from the request, aborting.";
        }

        let user: User = await AppDataSource
            .getRepository(User)
            .createQueryBuilder("users")
            .where("email = :email", {email})
            .getOne();

        if (user) {
            const message = `User with email ${email} already exists, aborting.`;
            console.log(message);
            response.status(500).json({message});
            return;
        }

        const passwordHash = await calculatePasswordHash(password, user.passwordSalt);

        user = AppDataSource.getRepository(User).create({
            email,
            pictureUrl,
            isAdmin,
            passwordHash,
            passwordSalt: crypto.randomBytes(64).toString('hex')
        });

        await AppDataSource.manager.save(user);

        logger.info(`User ${email} has been created.`);

        response.json({
            user: {
                email,
                pictureUrl,
                isAdmin
            }
        }).status(200);

    } catch (error) {
        logger.error(`Error calling createUser()`);
        return next(error);
    }

}

