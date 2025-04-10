import express from "express";
import { TaskController } from "../controllers/task.controller";

const taskRouter = express.Router();

taskRouter.post("/task", TaskController.createTask);
taskRouter.get("/", TaskController.getAllTasks);

export default taskRouter;
