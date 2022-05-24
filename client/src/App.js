import React from 'react';
import { Route, Route, Routes } from 'react-router-dom';
import Connection from './pages/Connection';
import Home from './pages/Home';
import Registration from './pages/Registration';

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