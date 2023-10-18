import React from 'react';

import css from './RocketComponent.module.css'

const RocketComponent = ({flight}) => {
    const {mission_name, launch_year, links:{mission_patch}} = flight;

    console.log(mission_patch)

    return (
        <div className={css.Rocket}>
            <h3>{mission_name}</h3>
            <h4>Launch Year: {launch_year}</h4>
            <img src={mission_patch} alt={mission_name} className={css.RocketIMG}/>
        </div>
    );
};

export default RocketComponent;