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

// get all
LibraryRoutes.get("/", (req, res) => {
  res.json(allBooks);
});

// get one
LibraryRoutes.get("/:id", (req, res) => {
  const book = allBooks.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    res.status(404).json({ message: "This book is not available" });
  }
  res.status(200).json({ message: "Retrieved successful", book });
});

// get by status
LibraryRoutes.get("/:status", (req, res) => {
  const book = allBooks.filter((b) => b.status === req.params.status);

  if (!book) {
    res
      .status(404)
      .json({ message: "No books available with the specified status" });
  }
  res.status(200).json({ message: "Retrieved successful", book });
});

// add a book
LibraryRoutes.post("/", (req, res) => {
  const newBook = {
    id: allBooks.length + 1,
    name: req.body.name,
    author: req.body.author,
    status: req.body.status,
  };
  allBooks.push(newBook);
  res.status(200).json({ message: "Book added successfully", newBook });
});

// borrow a book
LibraryRoutes.put("/:id", (req, res) => {
  /**body */
  const book = allBooks.find((b) => b.id === parseInt(req.params.id));

  //   if (!book) {
  //     res.status(404).json({ message: "Not Availabe" });
  //   }
  book.status = req.body.status;
  res.status(201).json({ message: "Updated successful", book });
});

export default LibraryRoutes;
