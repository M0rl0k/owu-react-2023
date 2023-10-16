import React from 'react';
import './Pesona.css'

const Persona = ({id, name, status, species, gender, image}) => {
    return (
        <div className={'personas-item'}>
            <h2>ID: {id} | Name: {name}</h2>
            <p>Status: {status} | Species: {species} | Gender: {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Persona;