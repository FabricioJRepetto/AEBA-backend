import { Schema, model } from "mongoose";

const BlocksSetSchema = new Schema(
    {
        gym_id: {
            type: Schema.Types.ObjectId,
            ref: "Gym",
            required: true,
        },
        ubication: {
            sector: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                required: true,
            },
        },
        blocks: [
            {
                type: Schema.Types.ObjectId,
                ref: "Block",
            },
        ],
        since: {
            type: String,
        },
        until: {
            type: String,
        },
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);

const BlocksSet = model("BlocksSet", BlocksSetSchema);
export default BlocksSet;
