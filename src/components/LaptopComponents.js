import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buylaptop } from '../Redux/Toolkit/slices/laptopSlice'
// import { buyLaptop } from '../Redux/laptops/laptopAction';

function LaptopComponents() {
  var data = useSelector((state) => state.laptop)
  var dispatch = useDispatch()
  var changehandler = () => {
     if (data.count > 0) {
       dispatch(buylaptop());
     } else {
       alert('hii nrendra out of stock');
     }
  }
 
  
  return (
    <div>
      <h1>LaptopComponents:{ data.count}</h1>
      <button onClick={()=>changehandler()}>buy a laptop</button>
    </div>
  );
}

export default LaptopComponents