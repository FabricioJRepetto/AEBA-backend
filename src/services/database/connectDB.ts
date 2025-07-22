import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/");
        console.log(
            `✅ Connected to DataBase! ----- Running on:`,
            process.env.MONGODB_URI ? "[Cluster]" : "mongodb://localhost:27017/"
        );
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error);
        process.exit(1);
    }
};
export default connectDB;
