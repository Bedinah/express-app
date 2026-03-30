import express from "express";

const LibraryRoutes = express.Router();

//LIBRARY
const allBooks = [
  {
    id: 1,
    name: "La Belle et La Bette",
    author: "Tiana",
    status: "available",
  },
  {
    id: 2,
    name: "Luna",
    author: "Vince",
    status: "available",
  },
  {
    id: 3,
    name: "Fresr Balsam",
    author: "Ian",
    status: "borrow",
  },
];

// get all with optional status filter
LibraryRoutes.get("/", (req, res) => {
  const statusFilter = req.query.status;

  if (statusFilter) {
    const filteredBooks = allBooks.filter((b) => b.status === statusFilter);
    return res
      .status(200)
      .json({ message: "Retrieved successful", filteredBooks });
  }

  res.json({ message: "All books retrieved successfully", books: allBooks });
});

// get one
LibraryRoutes.get("/:id", (req, res) => {
  const book = allBooks.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).json({ message: "This book is not available" });
  }
  res.status(200).json({ message: "Retrieved successful", book });
});

// add a book
LibraryRoutes.post("/", (req, res) => {
  const newBook = {
    id: allBooks.length + 1,
    name: req.body.name,
    author: req.body.author,
    status: "available",
  };
  allBooks.push(newBook);
  res.status(201).json({ message: "Book added successfully", newBook });
});

// Update a book , update status to borrow/return
LibraryRoutes.patch("/:id", (req, res) => {
  const book = allBooks.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "This book is not available" });
  }
  book.name = req.body.name || book.name;
  book.author = req.body.author || book.author;
  book.status = req.body.status || book.status;
  res.status(201).json({ message: "Updated successful", book });
});
export default LibraryRoutes;
