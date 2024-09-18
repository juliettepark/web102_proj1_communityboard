import React from 'react';

const Banner = ({title, image}) => {
    return (
        <div className='banner-container'>
            <p>{'Current Read: ' + title}</p>
            <img src={image} />
        </div>
    );
}

export default Banner