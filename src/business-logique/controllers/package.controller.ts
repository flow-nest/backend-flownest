import { Request, Response } from "express";
import PackageModel from "../models/package.model";
import { createPackage, getAllPackages } from "../services/package.service";

export const PackageController = {
  createPackage: async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const pkg = new PackageModel(
        "",
        data.qr_code,
        Number(data.size),
        Number(data.weight),
        data.location,
        data.status,
        data.shelf_id,
        new Date(),
        new Date()
      );

      const savedPackage = await createPackage(pkg);
      res.status(201).json(savedPackage);
    } catch (err: any) {
      console.error("Error creating package: ", err);
      res.status(500).json({ error: err.message });
    }
  },

  getAllPackages: async (req: Request, res: Response) => {
    try {
      const packages = await getAllPackages();
      res.status(200).json(packages);
    } catch (err: any) {
      console.error("Error fetching packages: ", err);
      res.status(500).json({ error: err.message });
    }
  },
};
