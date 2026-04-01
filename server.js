import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/index.js";

// Load environment variables
// dotenv.config();
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// API ROUTES
app.use("/api", router);

const databaseUrl = process.env.DB_URL;

mongoose
  .connect(databaseUrl)
  .then(() => console.log("MongoDB connected."))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
