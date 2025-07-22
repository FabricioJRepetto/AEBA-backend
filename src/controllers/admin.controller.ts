import { NextFunction, Request, Response } from "express";
import User from "../services/database/models/User";
import Competition from "../services/database/models/Competition";

//_____ Users
/** Consulta y retorna todos los usuarios */
const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Error during getUsers:", error);
        next(error);
    }
};
/** Crea un usuario */
const createUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const newUser = await User.create({ ...req.body });
        res.json(newUser);
    } catch (error) {
        console.error("Error during createUser:", error);
        next(error);
    }
};
/** Actualiza un usuario */
const updateUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.query;
        // const user = await User.findById(id);
        const updatedUser = await User.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
        if (!updatedUser) return res.status(404).send("User not found");
        return res.json(updatedUser);
    } catch (error) {
        console.error("Error during manageUser:", error);
        next(error);
    }
};
/** Elimina un usuario */
const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.query;
        await User.findByIdAndDelete(id);
        res.status(200).send("User deleted successfully");
    } catch (error) {
        console.error("Error during deleteUser:", error);
        next(error);
    }
};

//_____ Competitions
/** Crea una competencia */
const createCompetition = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const newCompetition = await Competition.create({ ...req.body });
        return res.json(newCompetition);
    } catch (error) {
        console.error("Error during createCompetition:", error);
        next(error);
    }
};
/** Actualiza una competencia */
const updateCompetition = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.query;
        // const comp = await Competition.findById(id);
        const updatedComp = await Competition.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
        if (!updatedComp) return res.status(404).send("Competition not found");
        return res.json(updatedComp);
    } catch (error) {
        console.error("Error during manageCompetition:", error);
        next(error);
    }
};
/** Elimina una competencia */
const deleteCompetition = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.query;
        await Competition.findByIdAndDelete(id);
        res.status(200).send("Competition deleted successfully");
    } catch (error) {
        console.error("Error during deleteCompetition:", error);
        next(error);
    }
};
/** Establece el tiempo extra para una competencia */
const competitionOvertime = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.query;
        const updatedComp = await Competition.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
        if (!updatedComp) return res.status(404).send("Competition not found");
        // TODO: Implementar alerta de tiempo extra para usuarios (websocket/notificaciones)
        res.status(200).send("Competition overtime setted successfully");
    } catch (error) {
        console.error("Error during competitionOvertime:", error);
        next(error);
    }
};

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    updateCompetition,
    createCompetition,
    deleteCompetition,
    competitionOvertime,
};
