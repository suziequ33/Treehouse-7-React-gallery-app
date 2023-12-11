import React from 'react';
import { useNavigate } from "react-router-dom";

const Searct = () => {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const query = e.target.elements.search.value;
        navigate(`/search/${query}`);
    };

    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input type="search" name="search" placeholder="Search" required />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default Search;