import React from 'react';
import { Routes, Route } from "react-router-dom";
import Connection from './pages/connection/Connection';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  )
};