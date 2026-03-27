const express = require("express");
const router = express.Router();

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
    status: "available",
  },
];

// get all
router.get("/", (req, res) => {
  res.json(allBooks);
});

// get one
router.get("/:id", (req, res) => {
  const book = allBooks.find((b) => b.id === parseInt(req.params.id));

  if (!book) {
    res.status(404).json({ message: "Not Available" });
  }
  res.json(book);
});

// add a book
router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    name: req.body.name,
    author: req.body.author,
    status: req.body.status,
  };
  books.push(newBook);
  res.status(200).json(newBook);
});

// borrow a book
router.put("/:id", (req, res) => {
  const book = allBooks.find((b) => b.id === parseInt(req.body.id));

  if (!book) {
    res.status(404).json({ message: "Not Availabe" });
  }
  book.status = "borrow";
  res.json(book)
});

module.exports = router;
