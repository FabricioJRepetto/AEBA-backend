import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
    {
        nick_name: {
            type: String,
            lowercase: true,
            unique: true,
            required: true,
        },
        first_name: {
            type: String,
            lowercase: true,
            required: true,
        },
        last_name: {
            type: String,
            lowercase: true,
            required: true,
        },
        approved: {
            type: Boolean,
            required: true,
            default: false,
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password_hash: {
            type: String,
            required: true,
        },
        role: [{ type: String }],
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);

UserSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password_hash")) return next();

    const hash = await bcrypt.hash(user.password_hash, 10);
    user.password_hash = hash;
    next();
});

UserSchema.methods.comparePassword = async function (candidatePassword: string | Buffer): Promise<boolean> {
    const user = this;
    const compare = await bcrypt.compare(candidatePassword, user.password_hash);
    return compare;
};

export default model("User", UserSchema);
