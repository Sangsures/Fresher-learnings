const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: String,
  detailsUrl: String,
  originalPrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  rating: { 
    type: Number, 
    min: 0, 
    max: 5, 
    default: 0 
  },
  reviewCount: { 
    type: Number, 
    default: 0 
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;