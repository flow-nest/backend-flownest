import { Request, Response } from "express";
import { createPackage, getAllPackages } from "../services/package.service";

export const PackageController = {
  createPackage: async (req: Request, res: Response) => {
    try {
      const packageData = req.body;
      const pkg = await createPackage(packageData);
      res.status(201).json(pkg);
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
