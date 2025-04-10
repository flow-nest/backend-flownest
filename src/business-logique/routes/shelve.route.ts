import express from "express";
import { ShelveController } from "../controllers/shelve.controller";

const shelveRouter = express.Router();

shelveRouter.post("/shelve", ShelveController.createShelve);
shelveRouter.get("/shelves", ShelveController.getAllShelves);

export default shelveRouter;
