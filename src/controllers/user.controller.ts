import { NextFunction, Request, Response } from "express";
import Parameters from "../services/database/models/Parameters";
import User from "../services/database/models/User";
import Registry from "../services/database/models/Registry";
import Competitor from "../services/database/models/Competitor";
import Competition from "../services/database/models/Competition";

const signin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { dni } = req.body;
        if (!dni) return res.status(400).send("DNI is required");
        // TODO: Implementar la lógica de registro de usuario

        const registeredCompetitor = await Registry.findOne({ dni }).populate("competitions");
        if (!registeredCompetitor) return res.status(404).send("Registry not found for the provided DNI");

        const existingCompetitor = await Competitor.findOne({ dni: registeredCompetitor.dni }).populate("competitions");
        if (existingCompetitor) {
            return res.status(409).send("Competitor already exists");
            // TODO: si ya existe el competidor, actualizarlo competencias y bloques
        }

        if (registeredCompetitor.competitions.length === 0)
            return res.status(400).send("No competitions registered for this competitor");

        if (registeredCompetitor.competitions[0] instanceof Competition) {
            // TODO: no puedo acceder a los bloques
            // const blocks = registeredCompetitor.competitions.map(c => c.blocksTemplate!);
            // const newCompetitor = await Competitor.create({ dni, name: registeredCompetitor.name, blocks });
            // return res.status(200).json(newCompetitor);
        }
        return res.status(400).send("Invalid competition data for the registered competitor");
    } catch (error) {
        console.error("Error during signin:", error);
        next(error);
    }
};

const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        // TODO: Implementar el inicio de sesión
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during login:", error);
        next(error);
    }
};

const autoLogin = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        // TODO: Implementar el inicio de sesión automático
        res.status(501).send("Method not implemented yet");
    } catch (error) {
        console.error("Error during autoLogin:", error);
        next(error);
    }
};

/** Actualiza el estado (top) de un bloque propio del competidor */
const updateBlock = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { competitorId, blockId, competitionId, value } = req.body;
        if (!competitorId || !blockId || !competitionId)
            return res.status(400).send("Competitor ID, block ID and competition ID are required");
        const updatedCompetitor = await User.findByIdAndUpdate(
            {
                id: competitorId,
                "blocks.competitionId": competitionId,
                "blocks.number": blockId,
                "blocks.juiciable": false,
            },
            {
                $set: {
                    "blocks.$.top": req.body.value,
                },
            },
            { new: true }
        );
        if (!updatedCompetitor) return res.status(404).send("Competitor or block not found or juiciable block");
        res.status(200).json(updatedCompetitor);
    } catch (error) {
        console.error("Error during updateBlock:", error);
        next(error);
    }
};

/** @deprecated TORNEOS - WIP */
const validatePassphrase = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { passphrase } = req.query;
        if (!passphrase) return res.status(400).send("Passphrase is required");
        // TODO: Desencriptar la passphrase y compararla con la almacenada
        const p = await Parameters.findOne({});
        if (!p?.parameters) return res.status(404).send("Parameters not found");
        if (p.parameters.passphrase !== passphrase) return res.status(401).send("Invalid passphrase");
        res.status(200).send("Passphrase is valid");
    } catch (error) {
        console.error("Error during validate:", error);
        next(error);
    }
};

export { validatePassphrase, signin, login, autoLogin, updateBlock };
