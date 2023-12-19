import React, { useState, useEffect} from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './Config';

const App = () => {
console.log('Rendering App component');

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchData('cats');
    fetchData('dogs');
    fetchData('computers');
  }, [fetchData]);

  const fetchData = async (query) => {
    try {
      const perPage = 24;
      const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${perPage}&format=json&nojsoncallback=1`;
      console.log('API URL:', apiUrl);

      const response = await fetch(apiUrl);
      const result = await response.json();

      console.log('API Response:', result);

      const fetchedPhotos = result.photos.photo;
      setPhotos((prevPhotos) => [...prevPhotos, { topic: query, data: fetchedPhotos }]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <div className="container">
        <Search fetchData={fetchData} />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/cats" />} />
          <Route path="/cats" element={<PhotoList title="Cats" photos={photos.find((item) => item.title === 'cats')?.photos} />} />
          <Route path="/dogs" element={<PhotoList  title="Dogs" photos={photos.find((item) => item.title === 'dogs')?.photos} />} />
          <Route path="/computers" element={<PhotoList title="Computers" photos={photos.find((item) => item.title === 'computers')?.photos} />} />
          <Route path="/search/:query" element={<Search fetchData={fetchData} />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
