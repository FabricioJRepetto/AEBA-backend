import { Schema, model } from "mongoose";

const UserProgressSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        history: [
            {
                blocks_set: {
                    type: Schema.Types.ObjectId,
                    ref: "BlocksSet",
                    required: true,
                },
                blocks: [
                    {
                        type: Schema.Types.ObjectId,
                        ref: "Block",
                    },
                ],
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

const UserProgress = model("UserProgress", UserProgressSchema);
export default UserProgress;
