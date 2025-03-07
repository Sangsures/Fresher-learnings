const express = require("express");
const router = express.Router();
const Book = require("../models/Bookno");

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
