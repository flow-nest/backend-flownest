import express from "express";
import cors from "cors";
import robotRouter from "./business-logique/routes/robot.route";

export const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", robotRouter);

