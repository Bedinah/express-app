import { Router } from "express";
import LibraryRoutes from "./libraryRoutes.js";
// import FruitsRoutes from "./fruitsRoutes.js";
import FruitsRoutesMongo from "./fruitsRoutesMongo.js";

const router = Router();

// router.use("/fruits", FruitsRoutes);
router.use("/fruits", FruitsRoutesMongo);
router.use("/books", LibraryRoutes);

export default router;
