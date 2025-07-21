import { NextFunction, Request, Response } from "express";

export const allowCors = () => async (req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
        //? agregado 'Authorization' header para evitar error de cors en preflight
    );
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
};

export const logger = () => async (req: Request, res: Response, next: NextFunction) => {
    console.log(`\x1b[36m[>>]\x1b[0m [${req.method}] ${req.originalUrl}`);
    res.on("finish", () => {
        let statusColor = "\x1b[32m"; // Default to green for success
        if (res.statusCode >= 400 && res.statusCode < 500) {
            statusColor = "\x1b[33m"; // Yellow for client errors
        } else if (res.statusCode >= 500) {
            statusColor = "\x1b[31m"; // Red for server errors
        }
        console.log(`${statusColor}[<<] [${res.statusCode}]\x1b[0m ${req.originalUrl}`);
    });
    next();
};

export const error404 = async (req: Request, res: Response, next: NextFunction) => {
    next({ status: 404, message: `The requested endpoint ${req.originalUrl} doesn't exist.` });
};

export const generalErrorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(`\x1b[31m[!!]\x1b[0m`, err);
    const status = err.status || 500;
    const message = err.message || err;
    res.status(status).json({ error: message });
};
