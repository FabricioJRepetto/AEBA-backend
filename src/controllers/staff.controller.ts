import { NextFunction, Request, Response } from "express";

const rateSpecialBlock = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during rateSpecialBlock:", error);
    }
};

export { rateSpecialBlock };
