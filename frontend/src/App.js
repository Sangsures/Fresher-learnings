import React from "react";
import { Routes, Route } from "react-router-dom"; 
import BookList from "./Booklist";  


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
