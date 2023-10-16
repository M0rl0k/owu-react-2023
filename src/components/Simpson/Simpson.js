import React from 'react';
import './Simpson.css'

const Simpson = ({name, image}) => {
    return (
        <div className={'family-item'}>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Simpson;