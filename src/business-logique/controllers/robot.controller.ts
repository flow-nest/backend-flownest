import { Request, Response } from "express";
import { createRobot } from "../services/robot.service";

export const RobotController = {
  createRobot: async (req: Request, res: Response) => {
    try {
      const robotData = req.body;
      const robot = await createRobot(robotData);
      res.status(201).json(robot);
    } catch (err: any) {
      console.error("Error creating robot: ", err);
      res.status(500).json({ error: err.message });
    }
  },
};
