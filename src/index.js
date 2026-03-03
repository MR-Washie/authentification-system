import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";

import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,               
  })
);

app.use("/api/auth", authRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "CORS is working!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  connectDB();
});