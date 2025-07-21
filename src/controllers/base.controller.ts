import { NextFunction, Request, Response } from "express";

const competition = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during competition:", error);
    }
};

const leaderboard = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during leaderboard:", error);
    }
};

const parameters = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during parameters:", error);
    }
};

export { competition, leaderboard, parameters };
