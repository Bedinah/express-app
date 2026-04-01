import { Router } from "express";
import LibraryRoutes from "./libraryRoutes.js";
import FruitsRoutes from "./fruitsRoutes.js";
import sequelize from "../config/database.js";
// import FruitsRoutesMongo from "./fruitsRoutesMongo.js";

// sequelize
//   .authenticate()
//   .then(() => console.log("Database connection established."))
//   .catch((err) => console.error("Unable to connect to the database:", err));
const router = Router();

router.use("/fruits", FruitsRoutes);
// router.use("/fruits", FruitsRoutesMongo);
router.use("/books", LibraryRoutes);

export default router;
