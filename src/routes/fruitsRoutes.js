import { Router } from "express";
import {
  getAllFruits,
  createFruit,
  getOneById,
  updateFruit,
} from "../controllers/fruitsController.js";

const FruitsRoutes = Router();

FruitsRoutes.get("/all", getAllFruits);
FruitsRoutes.get("/one/:id", getOneById);
// FruitsRoutes.put("/one/:id", updateFruit);
FruitsRoutes.post("/", createFruit);

export default FruitsRoutes;
