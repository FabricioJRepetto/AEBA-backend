import { NextFunction, Request, Response } from "express";

const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during getUsers:", error);
    }
};
const manageUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during manageUser:", error);
    }
};
const manageCompetition = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during manageCompetition:", error);
    }
};

export { manageUser, manageCompetition, getUsers };
