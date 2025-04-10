import express from "express";
import { PackageController } from "../controllers/package.controller";

const packageRouter = express.Router();

packageRouter.post("/package", PackageController.createPackage);
packageRouter.get("/packages", PackageController.getAllPackages);

export default packageRouter;