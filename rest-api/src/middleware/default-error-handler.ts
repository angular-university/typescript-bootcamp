import {logger} from "../logger";

export function defaultErrorHandler (err, req, res, next) {
    logger.error(`Default error handler triggered; reason:`, err);
    if (res.headersSent) {
        logger.error(`Response was already being written, delegating to built-in Express error handler.`);
        return next(err);
    }

    res.status(500).json({
        status: "error",
        message: `Default error handler triggered - check logs.`
    });
}

