import { Schema, model } from "mongoose";

const CompetitorSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: true,
        },
        dni: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        competitionId: {
            type: Schema.Types.ObjectId,
            ref: "Competition",
            required: true,
        },
        blocks: [
            {
                competitionId: {
                    type: Schema.Types.ObjectId,
                    ref: "Competition",
                    required: true,
                },
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
        score: {
            type: Number,
            default: 0,
        },
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        toObject: { getters: true, virtuals: true },
    }
);

CompetitorSchema.virtual("score").get(function () {
    let score = 0;
    this.blocks.forEach(b => {
        // TODO: Implementar lógica de puntuación (preguntar a Majo)
        if (b.top) score += b.score - b.attempts;
    });
    return score;
});

const Competitor = model("Competitor", CompetitorSchema);
export default Competitor;
