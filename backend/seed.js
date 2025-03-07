const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect("mongodb://localhost:27017/book-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://bookspringindia.in/cdn/shop/products/Bsiq_360x.webp?v=16790731",
    detailsUrl: "https://www.goodreads.com/book/show/40121378-atomic-habits",
    originalPrice: 500,
    salePrice: 350,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    detailsUrl: "https://www.goodreads.com/book/show/865.The_Alchemist",
    originalPrice: 450,
    salePrice: 400
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    detailsUrl: "https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird",
    originalPrice: 600,
    salePrice: 500
  },

];

Book.insertMany(seedBooks)
  .then(() => {
    console.log("Books seeded successfully!");
    mongoose.connection.close();
  })
  .catch((err) => console.error("Error seeding books:", err));
