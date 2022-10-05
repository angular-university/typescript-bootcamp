import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {User} from "../models/user";
import {calculatePasswordHash} from "../utils";
const crypto = require("crypto");

/**
 *
 * curl -X POST http://localhost:9000/api/users -H "Content-Type:application/json" -d '{"email": "new-user@angular-university.io", "pictureUrl":"https://avatars.githubusercontent.com/u/5454709", "password": "test123", "isAdmin": false}'
 *
 */
export async function createUser(
    request: Request, response: Response, next:NextFunction) {

    try {

        logger.debug(`Called createUser()`);

        const {email, pictureUrl, password, isAdmin} = request.body;

        if (!email) {
            throw "Could not extract the email from the request, aborting.";
        }

        if (!password) {
            throw  "Could not extract the plain text password from the request, aborting."
        }

        const repository = AppDataSource.getRepository(User);

        const user = await repository.createQueryBuilder("users")
            .where("email = :email", {email})
            .getOne();

        if (user) {
            const message = `User with email ${email} already exists, aborting.`;
            logger.error(message);
            response.status(500).json({message});
            return;
        }

        const passwordSalt = crypto.randomBytes(64).toString('hex');

        const passwordHash = await calculatePasswordHash(password, passwordSalt);

        const newUser = repository.create({
            email,
            pictureUrl,
            isAdmin,
            passwordHash,
            passwordSalt
        });

        await AppDataSource.manager.save(newUser);

        logger.info(`User ${email} has been created.`);

        response.status(200).json({
            email,
            pictureUrl,
            isAdmin
        });

    }
    catch (error) {
        logger.error(`Error calling createUser()`);
        return next(error);
    }

}
