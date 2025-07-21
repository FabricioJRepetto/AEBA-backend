import { Schema, model } from "mongoose";

const CompetitionSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            unique: true,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);

const Competition = model("Competition", CompetitionSchema);
export default Competition;
