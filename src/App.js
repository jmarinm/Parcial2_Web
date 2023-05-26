import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import BookList from "./components/books";
import BookDetail from "./components/book_detail";
import UserContext from "./contexts/UserContext";

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<BookList />} />

          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

//<FormattedMessage id="Position"/>
export default App;
