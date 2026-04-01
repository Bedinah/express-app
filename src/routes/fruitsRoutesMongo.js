import { Router } from "express";
import {
  getAllFruits,
  createFruit,
  getOneById,
  updateFruit,
  deleteFruit,
} from "../controllers/fruitsControllerMongo.js";

const FruitsRoutes = Router();

FruitsRoutes.get("/all", getAllFruits);
FruitsRoutes.get("/one/:id", getOneById);
FruitsRoutes.patch("/one/:id", updateFruit);
FruitsRoutes.delete("/one/:id", deleteFruit);
FruitsRoutes.post("/", createFruit);

export default FruitsRoutes;
