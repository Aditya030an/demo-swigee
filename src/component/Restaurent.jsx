import React, { useState } from 'react'
import ButtonList from './ButtonList';
import RestaurentContainer from './RestaurentContainer';
import { useSelector } from "react-redux";
const Restaurent = () => {
  const inputState = useSelector((store)=>store.side.item);
  const value = inputState[inputState.length -1];
  return (
    <div className='w-9/12 mx-auto text-nowrap'>
      <h1 className='text-3xl font-semibold text-black '>Restaurants with online food delivery in {value}</h1>
      <div className=' mt-2'>

      <ButtonList/>
      <RestaurentContainer/>
      </div>
    </div>
  )
}

export default Restaurent;
