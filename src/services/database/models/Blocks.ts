import { Schema, model } from "mongoose";

const BlocksSchema = new Schema(
    {
        competitionId: {
            type: Schema.Types.ObjectId,
            ref: "Competition",
            required: true,
        },
        blocksTemplate: [
            {
                number: {
                    type: Number,
                    required: true,
                },
                score: {
                    type: Number,
                    required: true,
                },
                category: {
                    type: String,
                    required: true,
                },
                juiciable: {
                    type: Boolean,
                    default: false,
                },
                attempts: {
                    type: Number,
                    default: 0,
                },
                top: {
                    type: Boolean,
                    default: false,
                },
                zone: {
                    type: Boolean,
                    default: false,
                },
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

const Blocks = model("Blocks", BlocksSchema);
export default Blocks;
