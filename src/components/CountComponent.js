import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../Redux/Toolkit/slices/countSlice';
// import { decrease, incrementCount } from '../Redux/count/countAction'

function CountComponent() {
  var dispatch=useDispatch()
  var data=useSelector((state)=>state.count)
  return (
    <div>
      <h1>CountComponent:{data.count}</h1>
      <button onClick={() => dispatch(increase())}>increase count</button>
      <button onClick={() => dispatch(decrease())}>decrease count</button>
    </div>
  );
}

export default CountComponent