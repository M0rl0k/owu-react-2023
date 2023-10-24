import React from 'react';
import CarComponent from "./CarComponent";

const CarsComponent = ({cars, setCarForUpdate, deleteCar}) => {
    return (
        <div style={{display:'flex', flexFlow:'row wrap'}}>
            {cars.map(car => <CarComponent car={car} key={car.id} setCarForUpdate={setCarForUpdate} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default CarsComponent;