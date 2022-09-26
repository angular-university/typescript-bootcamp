import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";


export function defaultErrorHandler(
    err, request: Request, response: Response, next:NextFunction) {

    logger.error(`Default error handler triggered; reason: `, err);

    if (response.headersSent) {
        logger.error(`Response was already being written, delegating to built-in Express error handler.`);
        return next(err);
    }

    response.status(500).json({
       status: "error",
       message: "Default error handling triggered, check logs."
    });

}
