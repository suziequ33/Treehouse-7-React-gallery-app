import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ fetchData }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
       e.preventDefault();
       fetchData(query);
       navigate(`/search/${query}`);
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input type="search" name="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} required />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default Search;