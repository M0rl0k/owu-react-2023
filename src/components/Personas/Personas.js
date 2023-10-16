import React from 'react';
import Persona from "../Persona/Persona";

const Personas = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <Persona id={1}
                     name={'Rick Sanchez'}
                     status={'Alive'}
                     species={'Human'}
                     gender={'Male'}
                     image ={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            />
            <Persona id={2}
                     name={'Morty Smith'}
                     status={'Alive'}
                     species={'Human'}
                     gender={'Male'}
                     image ={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
            />
            <Persona id={3}
                     name={'Summer Smith'}
                     status={'Alive'}
                     species={'Human'}
                     gender={'Female'}
                     image ={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
            />
            <Persona id={4}
                     name={'Beth Smith'}
                     status={'Alive'}
                     species={'Human'}
                     gender={'Female'}
                     image ={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />
            <Persona id={5}
                     name={'Jerry Smith'}
                     status={'Alive'}
                     species={'Human'}
                     gender={'Male'}
                     image ={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
            />
            <Persona id={6}
                     name={'Abadango Cluster Princess'}
                     status={'Alive'}
                     species={'Alien'}
                     gender={'Female'}
                     image ={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
            />
        </div>
    );
};

export default Personas;