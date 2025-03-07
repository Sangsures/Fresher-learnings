import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CartProvider, useCart } from './CartContext';
import CartModal from './CartModal';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

 
  const { addToCart, cartItemCount } = useCart();

  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        const data = await response.json();
       
        if (Array.isArray(data)) {
          setBooks(data);
        } else if (data && Array.isArray(data.books)) {
          setBooks(data.books);
        } else {
          console.error("Invalid data format:", data);
          setBooks([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      }
    };

    fetchBooks();
  }, []);

  
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const booksPerPage = 9;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  
  const calculateDiscount = (original, sale) =>
    Math.round(((original - sale) / original) * 100);

  return (
    <div className="min-h-screen bg-white">
     
      <header className="border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <a 
              href="https://www.goodreads.com/?ref=nav_hom" 
              className="flex items-center"
            >
              <span className="text-xl font-medium text-gray-800">📚 Goodreads</span>
            </a>

           
            <nav className="hidden md:flex space-x-6">
              <a href="https://www.goodreads.com/?ref=nav_hom" className="text-gray-700 hover:text-gray-900 text-sm">Home</a>
              <a href="https://www.goodreads.com/choiceawards/best-books-2024?ref=nav_brws_gca" className="text-gray-700 hover:text-gray-900 text-sm">Browse</a>
              <a href="https://www.goodreads.com/genres?ref=nav_brws_genres" className="text-gray-700 hover:text-gray-900 text-sm">Categories</a>
            </nav>

           
            <button 
              type="button" 
              className="md:hidden text-gray-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

           
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsCartModalOpen(true)}
                className="relative bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors flex items-center"
              >
                <span className="mr-1">🛒</span> Cart
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
          
          
          {isMenuOpen && (
            <div className="md:hidden mt-2 pt-2 border-t border-gray-200">
              <a href="#" className="block py-2 text-gray-600">Home</a>
              <a href="#" className="block py-2 text-gray-600">Browse</a>
              <a href="#" className="block py-2 text-gray-600">Categories</a>
            </div>
          )}
        </div>
      </header>

      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-medium text-gray-800 mb-6">Featured Books</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBooks.map((book) => (
            <div 
              key={book._id} 
              className="h-full border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <Link
                to={book.detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-4">
                  <div className="flex justify-center h-48 mb-4">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-auto h-full object-contain"
                    />
                  </div>
                  <h3 className="text-base font-medium text-gray-800 text-center">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 text-center">{book.author}</p>
                  
                  {book.originalPrice !== undefined && book.salePrice !== undefined && (
                    <div className="mt-3 flex items-center justify-center space-x-2">
                      <span className="text-base font-medium text-green-900">
                         ₹{book.salePrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ₹{book.originalPrice}
                      </span>
                      <span className="bg-gray-100 text-red-600 text-xs px-2 py-1 rounded">
                        {calculateDiscount(book.originalPrice, book.salePrice)}% OFF
                      </span>
                    </div>
                  )}
                </div>
              </Link>
              
             
              <div className="p-4 border-t">
                <button 
                  onClick={(e) => {
                    e.preventDefault(); 
                    addToCart(book);
                  }}
                  className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

       
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            onClick={() => setSearchParams({ page: currentPage - 1 })}
            className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {Math.max(1, Math.ceil(books.length / booksPerPage))}
          </span>
          <button
            onClick={() => setSearchParams({ page: currentPage + 1 })}
            className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            disabled={currentPage >= Math.ceil(books.length / booksPerPage)}
          >
            Next
          </button>
        </div>
      </main>

     
      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={() => setIsCartModalOpen(false)} 
      />

    
      <footer className="border-t border-gray-200 py-4 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; 2025 Goodreads. All rights reserved.
        </div>
      </footer>
    </div>
  );
};


const BookListWithCart = () => {
  return (
    <CartProvider>
      <BookList />
    </CartProvider>
  );
};

export default BookListWithCart;