import { Request, Response } from "express";
import { createTask, getAllTasks } from "../services/task.service";

export const TaskController = {
  createTask: async (req: Request, res: Response) => {
    try {
      const taskData = req.body;
      const task = await createTask(taskData);
      res.status(201).json(task);
    } catch (err: any) {
      console.error("Error creating task: ", err);
      res.status(500).json({ error: err.message });
    }
  },

  getAllTasks: async (req: Request, res: Response) => {
    try {
      const tasks = await getAllTasks();
      res.status(200).json(tasks);
    } catch (err: any) {
      console.error("Error fetching tasks: ", err);
      res.status(500).json({ error: err.message });
    }
  },
};
