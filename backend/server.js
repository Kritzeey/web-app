import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express());

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Listening to port: ${PORT}`);
    console.log("http://localhost:5000/");
});