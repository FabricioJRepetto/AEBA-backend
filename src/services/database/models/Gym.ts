import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const GymSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            unique: true,
            required: true,
        },
        description: {
            type: String,
            lowercase: true,
        },
        location: {
            type: String,
            lowercase: true,
            required: true,
        },
        logo: {
            type: String,
        },
        staff: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);

export default model("Gym", GymSchema);
