import { Schema, model } from "mongoose";

const RegistrySchema = new Schema(
    {
        dni: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            lowercase: true,
            required: true,
        },
        competitions: [
            {
                type: Schema.Types.ObjectId,
                ref: "Competition",
                required: true,
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

const Registry = model("Registry", RegistrySchema);
export default Registry;
