import React from 'react';
import Photo from './Photo';


const PhotoList = ({ photos, title }) => {
    return (
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {photos.map((photo) => (
                    <Photo key={photo.id} photo={photo} />

                ))}
            </ul>
        </div>
    );
};


export default PhotoList;