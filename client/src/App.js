import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Connection from './pages/connection/Connection';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';
import AuthContext from './components/context/AuthContext';
import Navbar from './components/navbar/NavBar';

export default function App() {

  const initialToken = localStorage.getItem("token") ? localStorage.getItem("token") : "";
  const [token, setToken] =  useState(initialToken)

  return (
    <div>
      <AuthContext.Provider value={ { token, setToken }}>
        <Navbar />
        <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
      </AuthContext.Provider>    
    </div>
  )
};