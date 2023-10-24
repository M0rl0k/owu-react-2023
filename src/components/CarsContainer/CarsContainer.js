import React, {useEffect, useState} from 'react';
import CarsFormComponent from "./CarsFormComponent";
import CarsComponent from "./CarsComponent";
import {carsAPIservice} from "../../services/cars-api-service/CarsAPIservice";

const CarsContainer = () => {

    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [trigger, setTrigger] = useState(true)

    useEffect(()=> {
        carsAPIservice.getAll().then(({data}) => setCars(data))
    }, [trigger])

    const deleteCar = async (id) => {
         await carsAPIservice.deleteByID(id)
        setTrigger(prev=> !prev)
    }

    return (
        <>
            <CarsFormComponent carForUpdate={carForUpdate} setTrigger={setTrigger}/>
            <CarsComponent cars={cars} setCarForUpdate={setCarForUpdate} deleteCar={deleteCar}/>
        </>
    );
};

export default CarsContainer;