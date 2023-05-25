import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import BookList from './components/books';
import BookDetail from './components/book_detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:bookId" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//<FormattedMessage id="Position"/>
export default App;
