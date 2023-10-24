import React from 'react';

const CarComponent = ({car, setCarForUpdate, deleteCar}) => {
    const {price, year, brand, id} = car
    return (
        <div style={{width:'150px', border: '2px solid gray'}}>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <p>brand: {brand}</p>
            <p>id: {id}</p>
            <button onClick={()=> setCarForUpdate(car)}>update</button>
            <button onClick={()=> deleteCar(id)}>delete</button>
        </div>
    );
};

export default CarComponent;