import React from 'react';
import { useParams } from 'react-router-dom';

const PhotoList= () => {
    const { query } = useParams();

    return (
        <div>
            <h2>Results {query || 'defult topic'}</h2>
        </div>
    );
};


export default PhotoList;