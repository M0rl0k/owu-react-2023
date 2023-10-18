import React, {useEffect, useState} from 'react';
import {rocketService} from "../../../services/RocketService/RocketService";
import RocketComponent from "../Rocket/RocketComponent";

import css from './RocketsComponent.module.css'

const RocketsComponent = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        rocketService.getLaunches().then(({data}) => setLaunches(data))
    }, [])



    return (
        <div className={css.Rockets}>
            {launches
                .filter(launch => launch.launch_year !== '2020')
                .map(launch=> <RocketComponent flight={launch} key={launch.flight_number}/>)}
        </div>
    );
};

export default RocketsComponent;