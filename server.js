const express = require("express");
const dotenv = require("dotenv");
const LibraryRoute = require("./routes/libraryRoutes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware — parses incoming JSON requests
app.use(express.json());

// Route — responds to GET /
app.get("/", (req, res) => {
  res.json({
    message: "Server is running!",
    status: "OK",
  });
});

app.use("/books", LibraryRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
