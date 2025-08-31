import { Schema, model } from "mongoose";

const BlockSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        color: {
            holds: {
                type: String,
            },
            dot: {
                type: String,
            },
        },
        difficulty: {
            type: String,
            required: true,
        },
        setter: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        blocks_set: {
            type: Schema.Types.ObjectId,
            ref: "BlocksSet",
        },
        reviews: [
            {
                user_id: {
                    type: Schema.Types.ObjectId,
                    ref: "User",
                    required: true,
                },
                calification: {
                    type: Number,
                },
                difficulty: {
                    type: Number,
                    min: -1,
                    default: 0,
                    max: 1,
                },
            },
        ],
        //_____ TORNEOS _ WIP _____
        score: {
            type: Number,
        },
        juiciable: {
            type: Boolean,
            default: false,
        },
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);

const Block = model("Block", BlockSchema);
export default Block;
