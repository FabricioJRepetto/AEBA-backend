import { NextFunction, Request, Response } from "express";
import Competition from "../services/database/models/Competition";

/** Consulta y retorna una competencia */
const getCompetition = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const aux = await Competition.findById(req.params.id);
        res.json(aux);
    } catch (error) {
        console.error("Error during competition:", error);
        next(error);
    }
};
/** Consulta y retorna todas las competencias */
const competitions = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const aux = await Competition.find();
        res.json(aux);
    } catch (error) {
        console.error("Error during competition:", error);
        next(error);
    }
};
/** Consulta y retorna el leaderboard de una competencia */
const leaderboard = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const comp = await Competition.findById(req.params.id).populate("competitors");
        res.json(comp?.competitors || []);
    } catch (error) {
        console.error("Error during leaderboard:", error);
        next(error);
    }
};
/** Consulta y retorna los parámetros de la aplicación */
const parameters = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const comp = await Competition.findById(req.params.id).populate("competitors");
        res.json(comp?.competitors || {});
    } catch (error) {
        console.error("Error during parameters:", error);
        next(error);
    }
};

export { getCompetition, competitions, leaderboard, parameters };
