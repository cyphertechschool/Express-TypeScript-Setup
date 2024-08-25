import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Express = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// imports all routes

import exampleRouter from "./routes/example.route";

// routes declaration
app.use("/api/v1", exampleRouter);

export default app;
