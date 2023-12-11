import React from 'react';
import { Router, Route, Routes, Navigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import config from './config';
import './App.css'

const apiKey = config.apiKey;

const App = () => {
  return (
    <Router>
      <div>
        <Search />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/cats" /> } />
          <Route path="/cats" element={<PhotoList />} />
          <Route path="/dogs" element={<PhotoList />} />
          <Route path="/computers" element={<PhotoList />} />
          <Route path="/search/:query" element={<Search/>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
