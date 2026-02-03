import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import tripRoutes from "./routes/trips.js";


const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/trips", tripRoutes);

export default app;
