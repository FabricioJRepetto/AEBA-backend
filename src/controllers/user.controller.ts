import { NextFunction, Request, Response } from "express";

const signin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during signin:", error);
    }
};

const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during login:", error);
    }
};

const autoLogin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during autoLogin:", error);
    }
};

const updateBlock = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during updateBlock:", error);
    }
};

export { signin, login, autoLogin, updateBlock };
