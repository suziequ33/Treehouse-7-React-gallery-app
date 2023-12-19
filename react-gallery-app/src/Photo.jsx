import React from 'react';

const Photo = ({ photo }) => {
    const { farm, server, id, secret } = photo;
    const imgUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

    return (
        <li>
            <img src={imgUrl} alt={photo.title} />
        </li>
    );
};

export default Photo;