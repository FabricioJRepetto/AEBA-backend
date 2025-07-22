import { Schema, model } from "mongoose";

const ParametersSchema = new Schema(
    {
        blockScore: {
            type: String,
            required: true,
        },
        liveLeaderboard: {
            type: Boolean,
            required: true,
        },
        leaderboardRefreshRate: {
            type: Number,
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

const Parameters = model("Parameters", ParametersSchema);
export default Parameters;
