import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error.message);
    }
};