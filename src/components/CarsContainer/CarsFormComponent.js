import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carsAPIservice} from "../../services/cars-api-service/CarsAPIservice";
import {carsValidator} from "../../validators/carsValidator";

const CarsFormComponent = ({carForUpdate, setTrigger}) => {

    const {handleSubmit,
        reset,
        register,
        setValue,
        formState: {isValid, errors}
        } = useForm({
        mode: "all",
        resolver: joiResolver(carsValidator)
    })


    useEffect(()=> {
        if (carForUpdate) {
            console.log(carForUpdate)
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
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
        <>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button disabled={!isValid}>Send</button>
            </form>

            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>

    );
};

export default CarsFormComponent;