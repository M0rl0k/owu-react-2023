import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsAPIservice} from "../../services/cars-api-service/CarsAPIservice";

const CarsFormComponent = ({carForUpdate, setTrigger}) => {

    const {handleSubmit,
        reset,
        register,
        setValue} = useForm()


    useEffect(()=> {
        if (carForUpdate) {
            console.log(carForUpdate)
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])


    const send = async (car) => {
        if (!carForUpdate) {
            await carsAPIservice.createCar(car)
        } else {
            await carsAPIservice.updateByID(carForUpdate.id, car)
            console.log(carForUpdate)
        }
        setTrigger(prev => !prev)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(send)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button>Send</button>
        </form>
    );
};

export default CarsFormComponent;