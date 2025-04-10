import express from "express";
import { RobotController } from "../controllers/robot.controller";

const robotRouter = express.Router();

robotRouter.post("/robot", RobotController.createRobot);

export default robotRouter;
