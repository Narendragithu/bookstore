import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux/Toolkit/slices/cakeSlice';
// import { buyCake } from '../Redux/cake/cakeAction'

function CakeComponent() {
  var dispatch=useDispatch()
  var data=useSelector((state)=>state.cake)
  return (
    <div>
      <h1> CakeComponent:{data.noOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>buycake</button>
    </div>
  );
}

export default CakeComponent