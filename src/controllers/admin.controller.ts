import { NextFunction, Request, Response } from "express";
import User from "../services/database/models/User";
import Competition from "../services/database/models/Competition";
import Registry from "../services/database/models/Registry";
import Parameters from "../services/database/models/Parameters";

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

//_____ Parameters
/** Actualiza un registro */
const updateParameters = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const params = await Parameters.findOne({});
        // TODO: Encriptar passphrase antes de guardar
        if (!params) {
            const newParams = await Parameters.create({
                parameters: {
                    ...req.body,
                },
            });
            return res.json({ parameters: newParams.parameters });
        } else {
            params.parameters = {
                ...req.body,
            };

            await params.save();
            return res.json({ message: "Parámetros actualizados exitosamente.", parameters: params.parameters });
        }
    } catch (error) {
        console.error("Error during updateParameters:", error);
        next(error);
    }
};

//_____ Registries
/** Consulta y retorna todos los registros */
const getRegistries = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const registries = await Registry.find();
        res.json(registries);
    } catch (error) {
        console.error("Error during getRegistries:", error);
        next(error);
    }
};
/** Crea un registro */
const createRegistry = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { dni, name, competitions } = req.body;
        if (!dni || !name || !competitions) return res.status(400).send("DNI, name and competitions are required");
        let comps: any = [];
        for await (const c of competitions) {
            const competition = await Competition.findById(c);
            if (!competition) return res.status(404).send(`Competition with ID ${c.competitionId} not found`);
            comps.push(competition);
        }
        const newRegistry = await Registry.create({ dni, name, competitions: comps });
        res.json(newRegistry);
    } catch (error) {
        console.error("Error during createRegistry:", error);
        next(error);
    }
};
/** Actualiza un registro */
const updateRegistry = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.query;
        // const user = await User.findById(id);
        const updatedRegistry = await Registry.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
        if (!updatedRegistry) return res.status(404).send("Registry not found");
        return res.json(updatedRegistry);
    } catch (error) {
        console.error("Error during manageRegistry:", error);
        next(error);
    }
};
/** Elimina un registro */
const deleteRegistry = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { id } = req.query;
        await Registry.findByIdAndDelete(id);
        res.status(200).send("Registry deleted successfully");
    } catch (error) {
        console.error("Error during deleteRegistry:", error);
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
    updateParameters,
    getRegistries,
    createRegistry,
    updateRegistry,
    deleteRegistry,
};
