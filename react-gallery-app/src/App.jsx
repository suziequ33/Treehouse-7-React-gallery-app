import React, { useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './Config';



const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async (query) => {
    const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
  
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    setData(result.photos.photo);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  useEffect(() => {
    fetchData('cats');
    fetchData('dogs');
    fetchData('computers');
  }, []);

  return (
    <Router>
      <div className="container">
        <Search fetchData={fetchData} />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/cats" /> } />
          <Route path="/cats" element={<PhotoList topic="Cats" data ={data} />} />
          <Route path="/dogs" element={<PhotoList  topic="Dogs" data={data} />} />
          <Route path="/computers" element={<PhotoList topic="Computers" data={data} />} />
          <Route path="/search/:query" element={<SearchResults fetchData={fetchData} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
