import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from './Search';
import Nav form './Nav';
import PhotoList form './PhotoList';
import config from './config';
import './App.css'

const apiKey = config.apiKey;

const App = () => {
  return (
    <Router>
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={} />
        <Route path="/cats" element={} />
        <Route path="/dogs" element={} />
        <Route path="/computers" element={} />
      </Routes>
    </Router>
  );
};


export default App;
