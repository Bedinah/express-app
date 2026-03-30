import express from "express";
import LibraryRoutes from "./libraryRoutes.js";
import FruitsRoutes from "./exampleRoutes.js";

const router = express.Router();

router.use("/fruits", FruitsRoutes);
router.use("/books", LibraryRoutes);

export default router;
