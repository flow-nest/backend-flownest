import { Request, Response } from "express";
import { createShelve, getAllShelves } from "../services/shelve.service";
import { ShelveModel } from "../models/shelve.model";

export const ShelveController = {
  createShelve: async (req: Request, res: Response) => {
    try {
      const shelveData = req.body;

      const shelve = new ShelveModel(
        "", // ID
        shelveData.location,
        Number(shelveData.capacity),
        Number(shelveData.current_load),
        shelveData.accessibility
      );

      const savedShelve = await createShelve(shelve);
      res.status(201).json(savedShelve);
    } catch (err: any) {
      console.error("Error creating shelve: ", err);
      res.status(500).json({ error: err.message });
    }
  },

  getAllShelves: async (req: Request, res: Response) => {
    try {
      const shelves = await getAllShelves();
      res.status(200).json(shelves);
    } catch (err: any) {
      console.error("Error fetching shelves: ", err);
      res.status(500).json({ error: err.message });
    }
  },
};
