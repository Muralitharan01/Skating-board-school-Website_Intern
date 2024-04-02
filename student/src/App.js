// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Skating from "./pages/Skating";
import Profile from "./pages/Profile";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Shop from "./pages/Shop";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skating' element={<Skating />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
